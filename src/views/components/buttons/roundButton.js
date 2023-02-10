import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import COLORS from '../../../consts/colors';
import Icons from 'react-native-vector-icons/AntDesign';

export default function RoundButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icons
          name={'plus'}
          color={COLORS.white}
          size={22}
          // style={{marginRight: 10}}
          // style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    // paddingVertical: 14,
    // paddingHorizontal: 10,
    padding: 5,
    backgroundColor: COLORS.green,
    marginTop: 7,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
