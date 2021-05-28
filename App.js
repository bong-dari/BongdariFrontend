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
import MainTabStackScreen from './src/screens/bottom/MainTabStackScreen';
import BoardTabScreen from './src/screens/board/BoardTabScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <MainTabStackScreen />
      {/* <BoardTabScreen /> */}
    </NavigationContainer>
  );
};

export default App;
