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
import AddInfo from './src/screens/member/AddInfo';
import Login from './src/screens/member/Login';

const App = () => {
  // return <AddInfo />;
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <MainTabStackScreen />
    </NavigationContainer>
  );
};

export default App;
