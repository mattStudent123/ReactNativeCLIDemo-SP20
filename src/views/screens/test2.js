import React, {useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useScrollToTop} from '@react-navigation/native';
// import HorizontalCard from '../components/horizontalCard';
// import VerticalCard from '../components/verticalCard';
import SearchScreen from './SearchScreen';
import LikedScreen from './LikedScreen';
import HomeScreen from './HomeScreen';

import {
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
} from 'react-native';

// Before rendering any navigation stack
import {enableScreens, enableFreeze} from 'react-native-screens';
import {jadenStyles} from '../../styles/jadenStyles';

const Tab = createBottomTabNavigator();

const Test2 = ({navigation}) => {
  enableScreens(true);
  enableFreeze(true);

  const logoXml =
    '<svg width="51" height="81" viewBox="0 0 51 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0147 0C37.2777 0 48.0294 10.6662 48.0294 23.8235C48.0294 36.9809 37.2777 47.6471 24.0147 47.6471H0V23.8235C0 10.6662 10.7518 0 24.0147 0Z" fill="#96FF00"/><path d="M0 23.8235L49.6144 73.043C52.5743 75.9793 50.478 81 46.292 81H4.69853C2.10361 81 4.34381e-06 78.9131 4.925e-06 76.3389L0 23.8235Z" fill="#11E07D"/></svg>';
  const user =
    '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>';

  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512"><g><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/><g><path fill="#96ff00" d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99    c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5    C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044    C312.01,275.383,362.22,323.696,362.667,383.841z"/><path fill="#96ff00" d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/></g></g></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>';
          } else if (route.name === 'Search') {
            iconName = focused
              ? '<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path fill="#96ff00" d="M17.721,3,16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L6.279,3Z"/><circle fill="#96ff00" cx="12" cy="14" r="4"/><path fill="#96ff00" d="M19,5H5a5.006,5.006,0,0,0-5,5v9a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10A5.006,5.006,0,0,0,19,5ZM12,20a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,20Z"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>';
          } else {
            iconName = focused
              ? '<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path fill="#96ff00" d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>';
          }
          return <SvgXml width="25" height="25" xml={iconName} />;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#f3f4f8',
        },
        headerStyle: {
          backgroundColor: '#f3f4f8',
          elevation: 0,
        },
        tabBarLabel: () => {
          return null;
        },
        headerTitle: props => (
          <View style={jadenStyles.header}>
            <SvgXml width="30" height="30" xml={logoXml} />
            <TouchableHighlight
              touchSoundDisabled={true}
              underlayColor={'#0000000d'}
              style={jadenStyles.user}
              onPress={() => navigation.navigate('Profile')}>
              <View>
                <SvgXml width="25" height="25" xml={user} />
              </View>
            </TouchableHighlight>
          </View>
        ),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Test2;
