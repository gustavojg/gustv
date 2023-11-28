import {StyleSheet, Dimensions} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  DARK_BG_COLOR,
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
  favButton: {
    backgroundColor: BACKGROUND_COLOR,
    width: 80,
    height: 80,
    position: 'absolute',
    zIndex: 100,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: DARK_BG_COLOR,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  selectedDay: {
    opacity: 1,
  },
});
