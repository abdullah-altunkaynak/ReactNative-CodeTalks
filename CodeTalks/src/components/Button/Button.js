import React from 'react';
import {TouchableHighlight, Text, View, ActivityIndicator} from 'react-native';
import style from './Button.style';
function Button({loading, text, onPress, theme = 'Inner'}) {
  return (
    <TouchableHighlight style={style.Wrapper} onPress={onPress}>
      <View style={style[theme]}>
        {loading ? (
          <ActivityIndicator color="white" size={'large'}/>
        ) : (
          <Text style={style[theme + 'Text']}>{text}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
}
export default Button;
