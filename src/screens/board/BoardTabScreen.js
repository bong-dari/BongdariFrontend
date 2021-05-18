import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Board1 from './Board1';
import Board2 from './Board2';
import Board3 from './Board3';

const Tab = createMaterialTopTabNavigator();

const BoardTabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Board1" component={Board1} />
      <Tab.Screen name="Board2" component={Board2} />
      <Tab.Screen name="Board3" component={Board3} />
    </Tab.Navigator>
  );
};

export default BoardTabScreen;
