import React, { useState } from 'react';
import {TextInput} from 'react-native';
import style from './Input.style';

function Input({onChangeText, placeholder, keyboardType, secureTextEntry, text}) {
    const [styles, setStyle] = useState("Input");
    const onFocus = () => {
        setStyle("InputFocus");
    }
    const onBlur = () => {
        setStyle("Input");
    }
  return (
    <TextInput
    autoCapitalize='none'
      style={style[styles]}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
export default Input;
