import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from '../navigation/AppNavigator.types';

type LiveTvScreenRouteProp = RouteProp<BottomTabParamList, 'LiveTv'>;

interface LiveTvScreenProps {
  route: LiveTvScreenRouteProp;
}

const LiveTvScreen: React.FC<LiveTvScreenProps> = () => {
  return (
    <View>
      <Text>Live Tv</Text>
    </View>
  );
};

export default LiveTvScreen;
