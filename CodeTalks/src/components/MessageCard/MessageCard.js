import React from "react";
import {View, Text} from 'react-native';
import style from './MessageCard.style';
import { formatDistance, parseISO } from 'date-fns';
import {tr} from 'date-fns/locale';

function MessageCard({item}) {
    const formattedDate = formatDistance(parseISO(item.date),new Date(),{
        addSuffix:true,
        locale:tr
      })
    return(
        <View style={style.Container}>
            <Text style={style.UserText}>{item.userName}</Text>
            <Text style={style.DateText}>{formattedDate}</Text>
            <Text style={style.MessageText}>{item.message}</Text>
        </View>
    );
};

export default MessageCard;