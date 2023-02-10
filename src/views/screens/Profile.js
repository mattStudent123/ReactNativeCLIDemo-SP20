import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
// import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonForgot from '../components/buttonForgot';
import COLORS from '../../consts/colors';
import NormalBtn from '../components/buttons/normalBtn';
import {globalStyles} from '../../styles/global';

export default function Profile({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons
            name="chevron-back-sharp"
            size={36}
            color="#96FF00"
            onPress={() => navigation.goBack(null)}></Ionicons>
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/profileImg.png')}
              style={styles.image}
              resizeMode="center"></Image>
          </View>
        </View>

        <Text style={[styles.subText, styles.recent]}>Email</Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.recentItem}>
            <View style={{width: 250}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#AEB5BC',
                  paddingBottom: 10,
                }}>
                hi@gmail.com
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 200,
            alignItems: 'center',
          }}>
          <NormalBtn
            btnColor={COLORS.green}
            txtColor={COLORS.white}
            title="Log out"
            onPress={() => navigation.navigate('Login')}
            width={'200'}
            height={'50'}
            margVert={'10'}
          />
          <Text
            onPress={() => navigation.navigate('TermsConditions')}
            style={{
              color: COLORS.darkGreen,
              fontWeight: 'bold',
            }}>
            Terms and Conditions
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    borderRadius: 100,
    overflow: 'hidden',
  },

  recent: {
    marginLeft: 80,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
});
