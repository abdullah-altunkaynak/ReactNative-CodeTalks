import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import RoomCard from '../../components/RoomCard';
import AddButton from '../../components/AddButton';
import database from '@react-native-firebase/database';
import ContentInputModal from '../../components/modal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
function Rooms({navigation}) {
  const [isVisible, setisVisible] = useState(false);
  const [newRoom, setNewRoom] = useState('');
  const [rooms, setRooms] = useState([]);
  useEffect( () => {
        database().ref('/Rooms/').on('value', snapshot => {
            const contentData = (snapshot.val());
            const parsedData = parseContentData(contentData || {}); // if content null go {}
            setRooms(parsedData);
        });
  }, []);
  const openModal = () => {
    setisVisible(!isVisible);
  };
  const onClose = () => {
    setisVisible(false);
  };
  const createRoom = () => {
    const contentObject = {
        text: newRoom,
    }
    if(newRoom){
        database().ref('/Rooms/').push(contentObject);
    }
    else{
        Alert.alert('Christ no!', 'Please give a name.');
    }
  };
  const goRoom = room => {
    navigation.navigate('Chat Room', {room});
  }
  const renderItem = ({item}) => <RoomCard name={item.text} onPress={() => goRoom(item)}/>
  return (
    <View style={{backgroundColor: '#222831', width: '100%', height: '100%'}}>
      <FlatList horizontal={false} numColumns={2} columnWrapperStyle={{justifyContent: 'center'}}  data={rooms} renderItem={renderItem}/>
      <AddButton onPress={openModal} />
      <ContentInputModal buttonText={'Oluştur'} text={newRoom} onChangeText={setNewRoom} isVisible={isVisible} onPress={createRoom} onClose={onClose} />
    </View>
  );
}

export default Rooms;
