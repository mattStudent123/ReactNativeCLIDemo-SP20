import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 8,
        marginVertical: 10,
        //         borderRadius: 100,
        // color: darkGreen,
        // paddingHorizontal: 20,
        // width: '100%',
        // backgroundColor: 'white',
        // marginVertical: 10,
        // borderColor: 'rgb(220,220, 220)',
        // borderWidth: 2,
      }}>
      <Text style={{color: textColor, fontSize: 22, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
