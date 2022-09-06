import React from "react";
import {View, Text} from 'react-native';
import style from './Logo.style';
function Logo() {
    return (
        <View style={style.Container}>
            <Text style={style.FirstText}>Code</Text>
            <Text style={style.SecondText}>Talks</Text>
        </View>
    );
}

export default Logo;