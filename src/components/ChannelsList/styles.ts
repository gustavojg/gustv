import {StyleSheet} from 'react-native';
import {
  IMAGE_CELL_WIDTH,
  IMAGE_CELL_HEIGHT,
  BACKGROUND_COLOR,
  BORDER_COLOR,
  LIGHT_TEXT_COLOR,
} from '../../constants';

export const styles = StyleSheet.create({
  list: {
    backgroundColor: BACKGROUND_COLOR,
    marginTop: 50,
  },
  channelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: IMAGE_CELL_WIDTH,
    height: IMAGE_CELL_HEIGHT,
    backgroundColor: BACKGROUND_COLOR,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BORDER_COLOR,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  channelTitle: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 16,
  },
});
