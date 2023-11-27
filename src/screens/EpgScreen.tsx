import React, {useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from '../navigation/AppNavigator.types';
import {ChannelContext} from '../context/ChannelContext';
import {ChannelGuide} from '../components/ChannelGuide';
import {BACKGROUND_COLOR} from '../constants';
import Loader from '../components/Loader';

type EpgScreenScreenProp = RouteProp<BottomTabParamList, 'EPG'>;

interface EpgScreenScreenProps {
  route: EpgScreenScreenProp;
}

const EpgScreen: React.FC<EpgScreenScreenProps> = () => {
  const {channels, isLoading, error} = useContext(ChannelContext);

  if (isLoading) return <Loader />;
  if (error) return <Text>Error loading channels</Text>;

  return (
    <View style={styles.container}>
      <ChannelGuide channels={channels} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default EpgScreen;
