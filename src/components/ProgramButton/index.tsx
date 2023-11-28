import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';
import {
  CELL_HEIGHT,
  CURRENT_PROGRAM_BG_COLOR,
  PROGRAM_BG_COLOR,
} from '../../constants';
import {
  calculateWidth,
  convertToLocalHourMinute,
  isCurrentTimeInRange,
} from '../../utils/dateUtils';
import {Schedule} from '../../models/ChannelModel';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/AppNavigator.types';

interface ProgramButtonProps {
  schedule: Schedule;
  timeUnitWidth: number;
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;

const returnPath = (programStatus: string, id: string): string => {
  switch (programStatus) {
    case 'live':
      return 'program_live_id';
    case 'ended':
      return 'program_catchup_id';
    case 'future':
      return id;
    default:
      return 'program_live_id';
  }
};

const ProgramButton: React.FC<ProgramButtonProps> = ({
  schedule,
  timeUnitWidth,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const currentLive = isCurrentTimeInRange(schedule.start, schedule.end);

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Detail', {
          itemId: returnPath(currentLive, schedule.id),
        })
      }>
      <View
        style={[
          styles.program,
          {
            width: calculateWidth(schedule.start, schedule.end, timeUnitWidth),
            height: CELL_HEIGHT,
            backgroundColor:
              currentLive === 'live'
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
    </TouchableHighlight>
  );
};

export default ProgramButton;
