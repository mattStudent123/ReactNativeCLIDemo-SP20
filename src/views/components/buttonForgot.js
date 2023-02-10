import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../consts/colors';
const ButtonForgot = ({btn, txtColor, btnSize, title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: Number(btnSize),
        borderRadius: 100,
        backgroundColor: btn,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: txtColor, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonForgot;
