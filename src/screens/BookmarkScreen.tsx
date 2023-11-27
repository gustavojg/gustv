import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from '../navigation/AppNavigator.types';

type BookmarkScreenRouteProp = RouteProp<BottomTabParamList, 'BookMark'>;

interface BookmarkScreenProps {
  route: BookmarkScreenRouteProp;
}

const BookmarkScreen: React.FC<BookmarkScreenProps> = () => {
  return (
    <View>
      <Text>Live Tv</Text>
    </View>
  );
};

export default BookmarkScreen;
