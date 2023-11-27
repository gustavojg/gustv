import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootStackParamList} from './AppNavigator.types';
import DetailsScreen from '../screens/DetailScreen';
import Header from '../components/Header';
import { DARK_BG_COLOR } from '../constants';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        header: () => <Header
        backgroundColor={DARK_BG_COLOR}
        leftElement={
          <TouchableOpacity onPress={() => console.log('Profile pressed')}>
            <Icon name="person" size={35} color="white" />
          </TouchableOpacity>
        }
        rightElement={
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <Icon name="search" size={35} color="white" />
          </TouchableOpacity>
        }
      />,
        headerShown: route.name === 'Detail' && false,
      })}>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
