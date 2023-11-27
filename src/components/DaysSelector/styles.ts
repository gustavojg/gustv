import {StyleSheet, Dimensions} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  LIGHT_TEXT_COLOR,
} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    height: 80,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: BORDER_COLOR,
    borderBottomColor: BORDER_COLOR,
  },
  dayItem: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 5,
    opacity: 0.5,
  },
  dayText: {
    color: LIGHT_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateText: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 16,
  },
  selectedDay: {
    opacity: 1,
  },
});
