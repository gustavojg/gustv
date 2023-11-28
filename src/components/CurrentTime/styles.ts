import {StyleSheet} from 'react-native';
import {TIMER_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  boldLine: {
    width: 4,
    backgroundColor: TIMER_COLOR,
    height: 44,
    borderRadius: 100,
    marginTop: 3,
  },
  container: {
    position: 'absolute',
    width: 5,
    height: '100%',
    zIndex: 200,
    alignItems: 'center',
  },
  thinLine: {width: 1, height: '100%', backgroundColor: TIMER_COLOR},
});
