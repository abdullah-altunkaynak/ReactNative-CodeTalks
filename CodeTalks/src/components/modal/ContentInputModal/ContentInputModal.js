import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import style from './ContentInputModal.style';
import Modal from 'react-native-modal';
import Button from '../../Button';

function ContentInputModal({buttonText, onChangeText, text, onPress, isVisible, onClose}) {
  return (
    <Modal style={style.Wrapper} isVisible={isVisible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}>
      <View style={style.Container}>
        <TextInput style={style.TextInput} value={text} placeholder="Type Something" placeholderTextColor={'gray'} onChangeText={onChangeText} multiline/>
        <Button style={style.Button} text={buttonText} onPress={onPress} />
      </View>
    </Modal>
  );
}

export default ContentInputModal;
