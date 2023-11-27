import {Platform, StatusBar, StyleSheet} from 'react-native';
import {DARK_BG_COLOR, LIGHT_TEXT_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: DARK_BG_COLOR,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
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
