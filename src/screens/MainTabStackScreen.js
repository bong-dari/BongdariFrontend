import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AreaScreen from './AreaScreen';
import SearchScreen from './SearchScreen';
import MapScreen from './MapScreen';
import MyPageScreen from './MyPageScreen';
import { Image } from 'react-native';

const MainTab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AreaStack = createStackNavigator();
const MapStack = createStackNavigator();
const MyPageStack = createStackNavigator();

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
              <Image
                source={
                  focused
                    ? require('../assets/icons/ClickedHomeIcon.png')
                    : require('../assets/icons/HomeIcon.png')
                }
                style={{
                  width: 25,
                  height: 25,
                }}
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
              <Image
                source={
                  focused
                    ? require('../assets/icons/ClickedSearchIcon.png')
                    : require('../assets/icons/SearchIcon.png')
                }
                style={{
                  width: 25,
                  height: 25,
                }}
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
              <Image
                source={
                  focused
                    ? require('../assets/icons/ClickedAreaIcon.png')
                    : require('../assets/icons/AreaIcon.png')
                }
                style={{
                  width: 25,
                  height: 25,
                }}
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
              <Image
                source={
                  focused
                    ? require('../assets/icons/ClickedMapIcon.png')
                    : require('../assets/icons/MapIcon.png')
                }
                style={{
                  width: 25,
                  height: 25,
                }}
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
              <Image
                source={
                  focused
                    ? require('../assets/icons/ClickedMyPageIcon.png')
                    : require('../assets/icons/MyPageIcon.png')
                }
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabStackScreen;
