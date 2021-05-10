/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import MainTabStackScreen from './src/screens/MainTabStackScreen';
import InstitutionAddressForm from './src/screens/institution/InstitutionAddressForm';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <MainTabStackScreen />
    </NavigationContainer>
  );
};

export default App;
