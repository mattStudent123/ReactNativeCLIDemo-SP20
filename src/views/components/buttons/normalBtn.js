import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../../consts/colors';

const NormalBtn = ({
  btnColor,
  txtColor,
  width,
  title,
  onPress,
  height,
  margVert,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        // height: 50,
        height: Number(height),
        width: Number(width),
        borderRadius: 100,
        backgroundColor: btnColor,
        // marginVertical: 10,
        marginVertical: Number(margVert),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: txtColor, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default NormalBtn;
