import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../consts/colors';

const FilterButton = ({btn, txtColor, btnSize, title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 35,
        width: 185,
        borderRadius: 100,
        backgroundColor: btn,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: txtColor, fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
