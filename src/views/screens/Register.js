// import {AsyncStorage} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {globalStyles} from '../../styles/global';

const Register = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    // jideo23@gmail.com
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

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
    } else if (inputs.confirmPassword.length < 8) {
      handleError('Min password length of 8', 'confirmPassword');
      isValid = false;
    } else if (inputs.password !== inputs.confirmPassword) {
      handleError(
        'Password and confirm password should be same',
        'confirmPassword',
      );
      isValid = false;

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
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', error.message);
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
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        <Loader visible={loading} />
        {/* <KeyboardAvoidingView behavior="padding" style={globalStyles.container}> */}
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
              Sign up
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
                error={errors.confirmPassword}
                password
              />
              <NormalBtn
                // btnColor={'#96FF00'}
                // txtColor={'white'}
                btnColor={COLORS.green}
                txtColor={COLORS.white}
                title="Create Account"
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
                Already have account?{' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    color: COLORS.darkGreen,
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

// const Registration = ({navigation}) => {
//   const [inputs, setInputs] = React.useState({
//     email: '',
//     fullname: '',
//     phone: '',
//     password: '',
//   });
//   const [errors, setErrors] = React.useState({});
//   const [loading, setLoading] = React.useState(false);

//   const validate = () => {
//     Keyboard.dismiss();
//     let isValid = true;

//     if (!inputs.email) {
//       handleError('Please input email', 'email');
//       isValid = false;
//     } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
//       handleError('Please input a valid email', 'email');
//       isValid = false;
//     }

//     if (!inputs.fullname) {
//       handleError('Please input fullname', 'fullname');
//       isValid = false;
//     }

//     if (!inputs.phone) {
//       handleError('Please input phone number', 'phone');
//       isValid = false;
//     }

//     if (!inputs.password) {
//       handleError('Please input password', 'password');
//       isValid = false;
//     } else if (inputs.password.length < 5) {
//       handleError('Min password length of 5', 'password');
//       isValid = false;
//     }

//     if (isValid) {
//       register();
//     }
//   };

//   const register = () => {
//     setLoading(true);
//     setTimeout(() => {
//       try {
//         setLoading(false);
//         AsyncStorage.setItem('userData', JSON.stringify(inputs));
//         navigation.navigate('LoginScreen');
//       } catch (error) {
//         Alert.alert('Error', 'Something went wrong');
//       }
//     }, 3000);
//   };

//   const handleOnchange = (text, input) => {
//     setInputs(prevState => ({...prevState, [input]: text}));
//   };
//   const handleError = (error, input) => {
//     setErrors(prevState => ({...prevState, [input]: error}));
//   };
//   return (
//     <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
//       <Loader visible={loading} />
//       <ScrollView
//         contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
//         <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
//           Register
//         </Text>
//         <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
//           Enter Your Details to Register
//         </Text>
//         <View style={{marginVertical: 20}}>
//           <Input
//             onChangeText={text => handleOnchange(text, 'email')}
//             onFocus={() => handleError(null, 'email')}
//             iconName="email-outline"
//             label="Email"
//             placeholder="Enter your email address"
//             error={errors.email}
//           />

//           <Input
//             onChangeText={text => handleOnchange(text, 'fullname')}
//             onFocus={() => handleError(null, 'fullname')}
//             iconName="account-outline"
//             label="Full Name"
//             placeholder="Enter your full name"
//             error={errors.fullname}
//           />

//           <Input
//             keyboardType="numeric"
//             onChangeText={text => handleOnchange(text, 'phone')}
//             onFocus={() => handleError(null, 'phone')}
//             iconName="phone-outline"
//             label="Phone Number"
//             placeholder="Enter your phone no"
//             error={errors.phone}
//           />
//           <Input
//             onChangeText={text => handleOnchange(text, 'password')}
//             onFocus={() => handleError(null, 'password')}
//             iconName="lock-outline"
//             label="Password"
//             placeholder="Enter your password"
//             error={errors.password}
//             password
//           />
//           <Button title="Register" onPress={validate} />
//           <Text
//             onPress={() => navigation.navigate('LoginScreen')}
//             style={{
//               color: COLORS.black,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               fontSize: 16,
//             }}>
//             Already have account ?Login
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Registration;
