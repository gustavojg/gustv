import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {BACKGROUND_COLOR} from '../../constants';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={40} />
    </View>
  );
};

export default Loader;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
});
