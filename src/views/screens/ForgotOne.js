// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
import React, {useEffect, useState} from 'react';

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

const ForgotOne = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    pin: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [btnAtt, setBtnAtt] = useState(false);

  useEffect(() => {
    if (inputs.email !== '' && inputs.pin !== '') {
      setBtnAtt(true);
    } else {
      setBtnAtt(false);
    }
  }, [inputs]);

  const defPinNum = 1111;

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.pin) {
      handleError('Please input PIN number', 'pin');
      isValid = false;
    } else if (inputs.pin.length > 4 || inputs.pin.length < 4) {
      handleError('PIN must have 4 digits', 'pin');
      isValid = false;
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
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
            />

            <Input
              keyboardType="numeric"
              onChangeText={text => handleOnchange(text, 'pin')}
              onFocus={() => handleError(null, 'pin')}
              iconName="dialpad"
              label="PIN"
              placeholder="Enter your pin"
              error={errors.pin}
            />

            <NormalBtn
              btnColor={btnAtt ? '#D2D4DA' : COLORS.green}
              txtColor={btnAtt ? '#9496A1' : COLORS.white}
              title="Send PIN"
              onPress={validate}
              width={'200'}
              height={'50'}
              margVert={'10'}
            />
            <NormalBtn
              btnColor={btnAtt ? COLORS.green : '#D2D4DA'}
              txtColor={btnAtt ? COLORS.white : '#9496A1'}
              title="Next"
              onPress={() => navigation.navigate('ForgotTwo')}
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

export default ForgotOne;
