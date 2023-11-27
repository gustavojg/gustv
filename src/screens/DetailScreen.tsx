import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator.types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailsScreen;
