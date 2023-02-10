import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';

import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';

import NormalBtn from '../components/buttons/normalBtn';
import Markdown from 'react-native-markdown-display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import Button from '../components/button';
import Input from '../components/input';
import Loader from '../components/loader';
import ButtonForgot from '../components/buttonForgot';
import FilterButton from '../components/filterButton';
import {globalStyles} from '../../styles/global';

export default function Filter({navigation}) {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
    pin: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

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
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Ionicons
          name="chevron-back-sharp"
          size={36}
          color="#96FF00"
          style={{marginLeft: 10, marginTop: 10}}
          onPress={() => navigation.navigate('Search')}></Ionicons>
      </View>
      {/* <Ionicons name="md-more" size={24} color="#52575D"></Ionicons> */}

      <View style={styles.realContainerFilter}>
        <Text style={styles.filterTitle}>Sort by</Text>
        <View style={styles.containerFilter}>
          <NormalBtn
            btnColor={COLORS.green}
            txtColor={COLORS.white}
            title="Popular"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
          <NormalBtn
            btnColor={'#D2D4DA'}
            txtColor={'#9496A1'}
            title="Latest"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
        </View>
      </View>

      <View style={styles.realContainerFilter}>
        <Text style={styles.filterTitle}>Diet type</Text>
        <View style={styles.containerFilter}>
          <NormalBtn
            btnColor={COLORS.green}
            txtColor={COLORS.white}
            title="Vegan"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
          <NormalBtn
            btnColor={'#D2D4DA'}
            txtColor={'#9496A1'}
            title="Non-vegan"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
        </View>
      </View>

      <View style={styles.realContainerFilter}>
        <Text style={styles.filterTitle}>Cook method</Text>
        <View style={styles.containerFilter}>
          <NormalBtn
            btnColor={'#D2D4DA'}
            txtColor={'#9496A1'}
            title="All"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
          <NormalBtn
            btnColor={COLORS.green}
            txtColor={COLORS.white}
            title="None"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
          <NormalBtn
            btnColor={'#D2D4DA'}
            txtColor={'#9496A1'}
            title="Steam"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
          <NormalBtn
            btnColor={'#D2D4DA'}
            txtColor={'#9496A1'}
            title="Fry"
            onPress={validate}
            width={'185'}
            height={'35'}
            margVert={'5'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  realContainerFilter: {
    flexDirection: 'column',
    paddingTop: 30,
  },
  filterTitle: {
    color: 'black',
    marginLeft: 17,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  containerFilter: {
    // paddingVertical: 30,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    flexWrap: 'wrap',
  },
  imgContainer: {
    alignItems: 'center',
  },
});
