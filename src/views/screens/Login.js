import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {globalStyles} from '../../styles/global';

import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import NormalBtn from '../components/buttons/normalBtn';

import COLORS from '../../consts/colors';
import Button from '../components/button';
import Input from '../components/input';
import Loader from '../components/loader';
import HomeScreen from './HomeScreen';

const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate('Test2');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
          //invalid details
        }
      } else {
        Alert.alert('Error', 'User does not exist');
        //user doesnt exist
      }
    }, 5000);
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
        <KeyboardAvoidingView
          behavior="padding"
          style={{paddingTop: 33, paddingHorizontal: 20, alignItems: 'center'}}>
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
            <Text
              style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
              Log In
            </Text>
            {/* <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Login
        </Text> */}
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
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'password')}
                iconName="lock-outline"
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                password
              />
              <Text
                onPress={() => navigation.navigate('ForgotOne')}
                style={globalStyles.forgotPasswordText}>
                Forgot Password?
              </Text>
              <NormalBtn
                // btnColor={'#96FF00'}
                // txtColor={'white'}
                btnColor={COLORS.green}
                txtColor={COLORS.white}
                title="Log In"
                onPress={validate}
                width={'250'}
                height={'50'}
                margVert={'10'}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Register')}
                  style={{
                    color: COLORS.darkGreen,
                    fontWeight: 'bold',
                  }}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
