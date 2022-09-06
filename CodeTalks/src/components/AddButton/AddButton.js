import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import style from './AddButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function AddButton({onPress}) {
    return(
        <TouchableHighlight style={style.Wrapper} onPress={onPress}>
              <Icon style={style.Text} size={35}  name="plus" color={'white'}/>  
        </TouchableHighlight>
    );
}

export default AddButton;