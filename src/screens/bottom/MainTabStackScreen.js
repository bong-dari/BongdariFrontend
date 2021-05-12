import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AreaScreen from './AreaScreen';
import SearchScreen from './SearchScreen';
import MapScreen from './MapScreen';
import MyPageScreen from './MyPageScreen';
import styled from 'styled-components';
import UserTypeScreen from '../member/UserTypeScreen';
import { useNavigation } from '@react-navigation/core';
import Login from '../member/Login';
import AddInfo from '../member/AddInfo';

const MainTab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AreaStack = createStackNavigator();
const MapStack = createStackNavigator();
const MyPageStack = createStackNavigator();
const UserTypeStack = createStackNavigator();
// const AddInfoStack = createStackNavigator();

const BottomTabImage = styled.Image`
  width: 25px;
  height: 25px;
`;

// 봉사자, 봉사기관 userType 선택 view
const UserStackScreen = ({ navigation }) => {
  return (
    <UserTypeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UserTypeStack.Screen name="UserTypeScreen" component={UserTypeScreen} />
      <UserTypeStack.Screen name="AddInfo" component={AddInfo} />
      <UserTypeStack.Screen name="Login" component={Login} />
    </UserTypeStack.Navigator>
  );
};

// BottomTabNavigation
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = ({ navigation }) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="지역" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

const AreaStackScreen = ({ navigation }) => {
  return (
    <AreaStack.Navigator>
      <AreaStack.Screen name="area" component={AreaScreen} />
    </AreaStack.Navigator>
  );
};

const MapStackScreen = ({ navigation }) => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="map" component={MapScreen} />
    </MapStack.Navigator>
  );
};

const MyPageStackScreen = ({ navigation }) => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="myPage" component={MyPageScreen} />
    </MyPageStack.Navigator>
  );
};

const MainTabStackScreen = () => {
  return (
    <UserStackScreen />
    // <MainTab.Navigator
    //   tabBarOptions={{
    //     activeTintColor: '#0099CB',
    //   }}>
    //   <MainTab.Screen
    //     name="홈"
    //     component={HomeStackScreen}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <BottomTabImage
    //             source={
    //               focused
    //                 ? require('../../assets/icons/ClickedHomeIcon.png')
    //                 : require('../../assets/icons/HomeIcon.png')
    //             }
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <MainTab.Screen
    //     name="검색"
    //     component={SearchStackScreen}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <BottomTabImage
    //             source={
    //               focused
    //                 ? require('../../assets/icons/ClickedSearchIcon.png')
    //                 : require('../../assets/icons/SearchIcon.png')
    //             }
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <MainTab.Screen
    //     name="지역"
    //     component={AreaStackScreen}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <BottomTabImage
    //             source={
    //               focused
    //                 ? require('../../assets/icons/ClickedAreaIcon.png')
    //                 : require('../../assets/icons/AreaIcon.png')
    //             }
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <MainTab.Screen
    //     name="지도"
    //     component={MapStackScreen}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <BottomTabImage
    //             source={
    //               focused
    //                 ? require('../../assets/icons/ClickedMapIcon.png')
    //                 : require('../../assets/icons/MapIcon.png')
    //             }
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <MainTab.Screen
    //     name="My 봉달이"
    //     component={MyPageStackScreen}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <BottomTabImage
    //             source={
    //               focused
    //                 ? require('../../assets/icons/ClickedMyPageIcon.png')
    //                 : require('../../assets/icons/MyPageIcon.png')
    //             }
    //           />
    //         );
    //       },
    //     }}
    //   />
    // </MainTab.Navigator>
  );
};

export default MainTabStackScreen;
