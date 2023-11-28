import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../navigation/AppNavigator.types';
import {ChannelContext} from '../context/ChannelContext';
import {ChannelGuide} from '../components/ChannelGuide';
import {BACKGROUND_COLOR} from '../constants';
import Loader from '../components/Loader';

type HomeScreenNavigationProp = StackNavigationProp<BottomTabParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {channels, favChannelsData, isLoading, error} =
    useContext(ChannelContext);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Text>Error loading channels</Text>;
  }

  return (
    <View style={styles.container}>
      <ChannelGuide channels={channels} favChannels={favChannelsData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default HomeScreen;
