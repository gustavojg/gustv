import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface CurrentTimeProps {
  currentTimeIndicatorPosition: number;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({
  currentTimeIndicatorPosition,
}) => (
  <View style={{...styles.container, left: currentTimeIndicatorPosition}}>
    <View style={styles.boldLine} />
    <View style={styles.thinLine} />
  </View>
);

export default CurrentTime;
