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
    // tabBar 어트리뷰트에는 탭에 표시할 컴포넌트를 반환하는 함수를 설정 및 props 전달
    <Tab.Navigator tabBar={props => <BoardTabBar {...props} />}>
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
