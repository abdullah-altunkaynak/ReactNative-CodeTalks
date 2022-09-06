import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import style from './RoomCard.style';

function RoomCard({name, counter, onPress}) {
    return(
        <TouchableHighlight style={style.Wrapper} onPress={onPress}>
            <View style={style.Container}>
                <Text style={style.NameText}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default RoomCard;