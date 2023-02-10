import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../styles/global';

export default function TermsConditions({navigation}) {
  const copy = `

**Terms and Conditions:**
1. This application will not be responsible for any damaged experienced by the user itself.
2. This application should not be used to as a health plan.
3. This application is purely a guide for healthy eating and should not be fully relied.
4. Unauthorized distribution of this application is prohibited and consequences will be dire.


`;

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Ionicons
          name="chevron-back-sharp"
          size={36}
          color="#96FF00"
          style={{marginLeft: 10, marginTop: 10}}
          onPress={() => navigation.navigate('Profile')}></Ionicons>
      </View>
      {/* <Ionicons name="md-more" size={24} color="#52575D"></Ionicons> */}
      <Markdown
        style={{
          body: {
            paddingTop: 15,
            paddingHorizontal: 20,
            fontSize: 18,
            color: 'black',
          },
        }}>
        {copy}
      </Markdown>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/logoImgWithText.png')}
          style={styles.logoTermsImg}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgContainer: {
    alignItems: 'center',
  },
  logoTermsImg: {
    marginTop: 24,
    width: 250,
    height: 250,
  },
});
