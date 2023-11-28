import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from '../navigation/AppNavigator.types';

type RePlayScreenRouteProp = RouteProp<BottomTabParamList, 'RePlay'>;

interface RePlayScreenProps {
  route: RePlayScreenRouteProp;
}

const RePlayScreen: React.FC<RePlayScreenProps> = () => {
  return (
    <View>
      <Text>Re Play</Text>
    </View>
  );
};

export default RePlayScreen;
