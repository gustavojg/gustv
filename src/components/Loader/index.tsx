import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import { BACKGROUND_COLOR } from '../../constants';

const Loader = () => {
  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR
      }}>
      <ActivityIndicator color="white" size={40} />
    </View>
  );
};

export default Loader;
