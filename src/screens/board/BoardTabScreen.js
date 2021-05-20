import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Board1 from './Board1';
import Board2 from './Board2';
import Board3 from './Board3';
import BoardTabBar from '../../components/board/BoardTabBar';

const Tab = createMaterialTopTabNavigator();

// 게시판 상단 Tab Navigation
const BoardTabScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BoardTabBar {...props} />}
      tabBarOptions={{ labelStyle: { fontSize: 12 } }}>
      <Tab.Screen
        name="옆동네 봉사"
        component={Board1}
        // options={{ tabBarLabel: '타 기관 봉사 알리기' }}
      />
      <Tab.Screen name="우리동네 봉사" component={Board2} />
      <Tab.Screen name="재능 기부" component={Board3} />
    </Tab.Navigator>
  );
};

export default BoardTabScreen;
