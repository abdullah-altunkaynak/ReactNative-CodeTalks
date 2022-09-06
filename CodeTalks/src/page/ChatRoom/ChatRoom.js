import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import MessageCard from '../../components/MessageCard';
import style from './ChatRoom.style';
import ContentInputModal from '../../components/modal/ContentInputModal';
import AddButton from '../../components/AddButton';
import parseContentData from '../../utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function ChatRoom({route}) {
  const [newMessage, setNewMessage] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [contentList, setContentList] = React.useState([]);
  const roomName = route.params;
  React.useEffect(()=>{
    database().ref(`Rooms/${roomName.room.id}/${roomName.room.text}`).on('value',snapshot=>{
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {});
      setContentList(parsedData);
    })
  },[])
  const openModal = () => {
    setisVisible(!isVisible);
  };
  const onClose = () => {
    setisVisible(false);
  };
  const sendMessage = () => {
    const usermail = auth().currentUser.email;
    const contentMessage = {
      userName: usermail.split('@')[0],
      date: new Date().toISOString(),
      message: newMessage
    };
    if (newMessage) {
      database().ref('/Rooms/'+roomName.room.id+'/'+roomName.room.text).push(contentMessage);
    } else {
      Alert.alert('Christ no!', 'Please type something.');
    }
  };
  const renderItem = ({item}) => (
    <MessageCard item={item} />
  );
  return (
    <View style={style.Container}>
      <Text style={style.RoomName}>{roomName.room.text} odası oluşturuldu</Text>
      <FlatList data={contentList} renderItem={renderItem} />
      <AddButton onPress={openModal} />
      <ContentInputModal
        buttonText={'Gönder'}
        text={newMessage}
        onChangeText={setNewMessage}
        isVisible={isVisible}
        onPress={sendMessage}
        onClose={onClose}
      />
    </View>
  );
}

export default ChatRoom;
