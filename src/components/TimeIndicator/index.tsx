import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BACKGROUND_COLOR, LIGHT_TEXT_COLOR, TIME_WIDTH_UNIT } from '../../constants';

const TimeIndicator: React.FC = () => {
  const hours = Array.from({length: 24}, (_, index) => {
    const hour = index.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  return (
    <View style={styles.container}>
      {hours.map((hour, index) => (
        <View key={index} style={styles.hourContainer}>
          <Text style={styles.hourText}>{hour}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR,
    height: 50,
    paddingTop: 38
  },
  hourContainer: {
    width: TIME_WIDTH_UNIT,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRightWidth: .5,
    borderRightColor: 'gray',
    borderLefttWidth: .5,
    borderLeftColor: 'gray',
  },
  hourText: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 16,
    paddingHorizontal: 10,
    marginLeft: -31.5,
    marginTop: -32
  },
});

export default TimeIndicator;
