import {Platform, StyleSheet} from 'react-native';
import {LIGHT_TEXT_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 10 : 40,
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: LIGHT_TEXT_COLOR,
  },
  logo: {
    width: 60,
    height: 60,
  },
});
