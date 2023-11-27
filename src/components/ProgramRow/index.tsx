import React from 'react';
import {View, Text} from 'react-native';
import {Schedule} from '../../models/ChannelModel';
import {styles} from './styles';
import {
  CELL_HEIGHT,
  CURRENT_PROGRAM_BG_COLOR,
  PROGRAM_BG_COLOR,
} from '../../constants';
import { convertToLocalHourMinute, isCurrentTimeInRange } from '../../utils/dateUtils';

interface ProgramRowProps {
  schedules: Schedule[];
  timeUnitWidth: number;
}

const calculateWidth = (
  start: string,
  end: string,
  timeUnitWidth: number = 100,
): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const duration = (endDate.getTime() - startDate.getTime()) / 3600000;
  return duration * timeUnitWidth;
};

export const ProgramRow: React.FC<ProgramRowProps> = ({
  schedules,
  timeUnitWidth,
}) => {
  return (
    <View style={styles.row}>
      {schedules.map((schedule, index) => {
        const width = calculateWidth(
          schedule.start,
          schedule.end,
          timeUnitWidth,
        );
        return (
          <View
            key={`${schedule.id}${index}`}
            style={[
              styles.program,
              {
                width,
                height: CELL_HEIGHT,
                backgroundColor: isCurrentTimeInRange(
                  schedule.start,
                  schedule.end,
                )
                  ? CURRENT_PROGRAM_BG_COLOR
                  : PROGRAM_BG_COLOR,
              },
            ]}>
            <Text style={styles.programTitle}>{schedule.title}</Text>
            <Text style={styles.programText}>
              {convertToLocalHourMinute(schedule.start)} -{' '}
              {convertToLocalHourMinute(schedule.end)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
