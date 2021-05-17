import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AreaScreen from './AreaScreen';
import SearchScreen from './SearchScreen';
import MapScreen from './MapScreen';
import MyPageScreen from './MyPageScreen';
import styled from 'styled-components';
import UserTypeScreen from '../member/UserTypeScreen';
import InstitutionLogin from '../institution/InstitutionLogin';
import InstitutionAddressForm from '../institution/InstitutionAddressForm';
import InstitutionContactForm from '../institution/InstitutionContactForm';
import InstitutionNameForm from '../institution/InstitutionNameForm';
import InstitutionIdForm from '../institution/InstitutionIdForm';
import InstitutionPwForm from '../institution/InstitutionPwForm';
import InstitutionSNForm from '../institution/InstitutionSNForm';
import MemberLogin from '../member/MemberLogin';
import MemberAddInfo from '../member/MemberAddInfo';
import MemberTerms from '../member/MemberTerms';
import MemberAddName from '../member/MemberAddName';
import BoardCapacity from '../board/BoardCapacity';
import GobackButton from '../common/GobackButton';

const MainTab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AreaStack = createStackNavigator();
const MapStack = createStackNavigator();
const MyPageStack = createStackNavigator();
const UserTypeStack = createStackNavigator();
const UserBoardStack = createStackNavigator();

const BottomTabImage = styled.Image`
  width: 25px;
  height: 25px;
`;

// 유저 간 커뮤니티 게시판
const UserBoardStackScreen = () => {
  return (
    <UserBoardStack.Navigator>
      <UserBoardStack.Screen
        name="BoardCapacity"
        component={BoardCapacity}
        options={{
          title: '',
          headerLeft: () => <GobackButton />,
        }}
      />
    </UserBoardStack.Navigator>
  );
};
// 봉사자, 봉사기관 userType 선택 view
const UserStackScreen = () => {
  return (
    <UserTypeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UserTypeStack.Screen name="UserTypeScreen" component={UserTypeScreen} />
      <UserTypeStack.Screen name="MemberLogin" component={MemberLogin} />
      <UserTypeStack.Screen
        name="InstitutionLogin"
        component={InstitutionLogin}
      />
      <UserTypeStack.Screen name="MemberAddInfo" component={MemberAddInfo} />
      <UserTypeStack.Screen name="MemberAddName" component={MemberAddName} />
      <UserTypeStack.Screen name="MemberTerms" component={MemberTerms} />
      <UserTypeStack.Screen
        name="InstitutionAddressForm"
        component={InstitutionAddressForm}
      />
      <UserTypeStack.Screen
        name="InstitutionContactForm"
        component={InstitutionContactForm}
      />
      <UserTypeStack.Screen
        name="InstitutionIdForm"
        component={InstitutionIdForm}
      />
      <UserTypeStack.Screen
        name="InstitutionNameForm"
        component={InstitutionNameForm}
      />
      <UserTypeStack.Screen
        name="InstitutionPwForm"
        component={InstitutionPwForm}
      />
      <UserTypeStack.Screen
        name="InstitutionSNForm"
        component={InstitutionSNForm}
      />
    </UserTypeStack.Navigator>
  );
};

// BottomTabNavigation
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="지역" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

const AreaStackScreen = () => {
  return (
    <AreaStack.Navigator>
      <AreaStack.Screen name="area" component={AreaScreen} />
    </AreaStack.Navigator>
  );
};

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="map" component={MapScreen} />
    </MapStack.Navigator>
  );
};

const MyPageStackScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="myPage" component={MyPageScreen} />
    </MyPageStack.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <MainTab.Navigator
      tabBarOptions={{
        activeTintColor: '#0099CB',
      }}>
      <MainTab.Screen
        name="홈"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabImage
                source={
                  focused
                    ? require('../../assets/icons/ClickedHomeIcon.png')
                    : require('../../assets/icons/HomeIcon.png')
                }
              />
            );
          },
        }}
      />
      <MainTab.Screen
        name="검색"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabImage
                source={
                  focused
                    ? require('../../assets/icons/ClickedSearchIcon.png')
                    : require('../../assets/icons/SearchIcon.png')
                }
              />
            );
          },
        }}
      />
      <MainTab.Screen
        name="지역"
        component={AreaStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabImage
                source={
                  focused
                    ? require('../../assets/icons/ClickedAreaIcon.png')
                    : require('../../assets/icons/AreaIcon.png')
                }
              />
            );
          },
        }}
      />
      <MainTab.Screen
        name="지도"
        component={MapStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabImage
                source={
                  focused
                    ? require('../../assets/icons/ClickedMapIcon.png')
                    : require('../../assets/icons/MapIcon.png')
                }
              />
            );
          },
        }}
      />
      <MainTab.Screen
        name="My 봉달이"
        component={MyPageStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabImage
                source={
                  focused
                    ? require('../../assets/icons/ClickedMyPageIcon.png')
                    : require('../../assets/icons/MyPageIcon.png')
                }
              />
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};

const MainTabStackScreen = () => {
  // 테스트용 상태
  const [isLogined, setIsLogined] = useState(true);
  // return <>{isLogined ? <UserStackScreen /> : <BottomTabNavigation />}</>;
  return <UserBoardStackScreen />;
};

export default MainTabStackScreen;
