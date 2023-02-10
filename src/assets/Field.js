import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {green, darkGreen} from './Constants';
// import placeValue from '../../views/screens/Login';

const Field = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  // state: {
  //   isFocused: true;
  // }

  // handleFocus = () => this.setState({isFocused: true});
  // handleBlur = () => this.setState({isFocused: false});

  return (
    <View>
      <TextInput
        {...props}
        style={[
          style.inputContainer,
          {
            borderColor: isFocused ? green : 'rgb(220, 220, 220)',
          },
        ]}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#616161"
      />
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    // color: COLORS.grey,
  },
  inputContainer: {
    borderRadius: 100,
    color: darkGreen,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
    // borderColor: 'rgb(220,220, 220)',
    borderWidth: 2,
    borderBottomWidth: 1,
  },
  fieldsTitle: {
    color: 'black',
    // fontWeight: 'bold',
  },
});

export default Field;
