// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import NormalBtn from '../components/buttons/normalBtn';
import COLORS from '../../consts/colors';
import Button from '../components/button';
import Input from '../components/input';
import Loader from '../components/loader';
import ButtonForgot from '../components/buttonForgot';
import {globalStyles} from '../../styles/global';

const ForgotTwo = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [btnAtt, setBtnAtt] = useState(false);

  useEffect(() => {
    if (inputs.password !== '' && inputs.confirmPassword !== '') {
      setBtnAtt(true);
    } else {
      setBtnAtt(false);
    }
  }, [inputs]);

  const validate = () => {
    // Keyboard.dismiss();
    let isValid = true;

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'password');
      isValid = false;
    }

    if (!inputs.confirmPassword) {
      handleError('Please input confirmed password', 'confirmPassword');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'confirmPassword');
      isValid = false;
    } else if (inputs.password !== inputs.confirmPassword) {
      handleError(
        'Password and confirm password should be same',
        'confirmPassword',
      );
      // this.setState({ passwordErrorMessage: "Passwoad and confirm password should be same."});
    }

    if (isValid) {
      register();
    }
  };
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalStyles.container}>
        <Loader visible={loading} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingTop: 33,
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/logo.png')}
            style={globalStyles.logoImg}
          />
          <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
            Forgot password{' '}
          </Text>

          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <Input
              onChangeText={text => handleOnchange(text, 'confirmPassword')}
              onFocus={() => handleError(null, 'confirmPassword')}
              iconName="lock-outline"
              label="Confirm password"
              placeholder="Confirm your password"
              error={errors.password}
              password
            />

            <NormalBtn
              btnColor={btnAtt ? COLORS.green : '#D2D4DA'}
              txtColor={btnAtt ? COLORS.white : '#9496A1'}
              title="Done"
              onPress={() => navigation.navigate('Login')}
              width={'200'}
              height={'50'}
              margVert={'10'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotTwo;
