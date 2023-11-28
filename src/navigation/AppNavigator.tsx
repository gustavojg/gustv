import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootStackParamList} from './AppNavigator.types';
import DetailsScreen from '../screens/DetailScreen';
import Header from '../components/Header';
import {DARK_BG_COLOR} from '../constants';
import {Platform, StatusBar} from 'react-native';
import HeaderButton from '../components/HeaderButton';

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
        // eslint-disable-next-line react/no-unstable-nested-components
        header: () => (
          <Header
            backgroundColor="transparent"
            leftElement={
              <HeaderButton
                icon="arrow-back-ios"
                onPress={() => navigation.goBack()}
              />
            }
            rightElement={
              <HeaderButton
                icon="search"
                onPress={() => console.log('Search Pressed')}
              />
            }
          />
        ),
      })}>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
