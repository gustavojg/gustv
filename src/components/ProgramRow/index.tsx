import React from 'react';
import {View} from 'react-native';
import {Schedule} from '../../models/ChannelModel';
import {styles} from './styles';
import ProgramButton from '../ProgramButton';

interface ProgramRowProps {
  schedules: Schedule[];
  timeUnitWidth: number;
}

export const ProgramRow: React.FC<ProgramRowProps> = ({
  schedules,
  timeUnitWidth,
}) => {
  return (
    <View style={styles.row}>
      {schedules.map((schedule, index) => (
        <ProgramButton
          schedule={schedule}
          timeUnitWidth={timeUnitWidth}
          key={`${schedule.id}${index}`}
        />
      ))}
    </View>
  );
};
