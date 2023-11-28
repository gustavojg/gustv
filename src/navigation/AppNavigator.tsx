import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootStackParamList} from './AppNavigator.types';
import DetailsScreen from '../screens/DetailScreen';
import Header from '../components/Header';
import {DARK_BG_COLOR} from '../constants';
import {Platform, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          backgroundColor: DARK_BG_COLOR,
        },
        headerShown: true,
        headerTransparent: true,
        header: () => (
          <Header
            backgroundColor='transparent'
            leftElement={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-ios" size={35} color="white" />
              </TouchableOpacity>
            }
            rightElement={
              <TouchableOpacity onPress={() => console.log('Search pressed')}>
                <Icon name="search" size={35} color="white" />
              </TouchableOpacity>
            }
          />
        ),
      })}>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
