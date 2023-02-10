import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import COLORS from '../../../consts/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchFilterBtn({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icons
          name={'filter'}
          color={COLORS.white}
          size={22}
          // style={{marginRight: 10}}
          // style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
  },
});
