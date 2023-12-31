import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomTabParamList} from './AppNavigator.types';
import HomeScreen from '../screens/HomeScreen';
import LiveTvScreen from '../screens/LiveTvScreen';
import EpgScreen from '../screens/EpgScreen';
import RePlayScreen from '../screens/RePlayScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import Header from '../components/Header';
import {BACKGROUND_COLOR, DARK_BG_COLOR} from '../constants';
import HeaderButton from '../components/HeaderButton';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="EPG"
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        header: () => (
          <Header
            backgroundColor={DARK_BG_COLOR}
            leftElement={
              <HeaderButton
                icon="person"
                onPress={() => console.log('Profile pressed')}
              />
            }
            rightElement={
              <HeaderButton
                icon="search"
                onPress={() => console.log('Search pressed')}
              />
            }
          />
        ),
        headerStyle: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          backgroundColor: DARK_BG_COLOR,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: BACKGROUND_COLOR,
          paddingTop: Platform.OS === 'ios' ? 0 : 5,
          paddingBottom: Platform.OS === 'ios' ? 25 : 0,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 1,
          shadowRadius: 6,
          elevation: 10,
        },
        tabBarActiveTintColor: '#e1a21e',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'EPG':
              iconName = 'view-list';
              break;
            case 'LiveTv':
              iconName = 'live-tv';
              break;
            case 'RePlay':
              iconName = 'replay';
              break;
            case 'BookMark':
              iconName = 'bookmark';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LiveTv" component={LiveTvScreen} />
      <Tab.Screen name="EPG" component={EpgScreen} />
      <Tab.Screen name="RePlay" component={RePlayScreen} />
      <Tab.Screen name="BookMark" component={BookmarkScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
