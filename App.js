import {StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import Login from './src/views/screens/Login';
import Register from './src/views/screens/Register';
import ForgotOne from './src/views/screens/ForgotOne';
import ForgotTwo from './src/views/screens/ForgotTwo';
// import realHome from './src/views/screens/Home';
import Profile from './src/views/screens/Profile';
import TermsConditions from './src/views/screens/TermsConditions';
import RecipeDetails from './src/views/screens/RecipeDetails';
import Filter from './src/views/screens/Filter';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Test2 from './src/views/screens/test2';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotOne" component={ForgotOne} />
        <Stack.Screen name="ForgotTwo" component={ForgotTwo} />
        <Stack.Screen name="Test2" component={Test2} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />

        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        <Stack.Screen name="Filter" component={Filter} />

        {/* /////////////////////////////////////////////// */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Like" component={Like} /> */}
        {/* <Stack.Screen name="realHome" component={realHome} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
