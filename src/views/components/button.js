import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../consts/colors';
const Button = ({btn, txtColor, btnSize, title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: 250,
        borderRadius: 100,
        backgroundColor: COLORS.green,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
