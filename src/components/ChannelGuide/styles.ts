import {StyleSheet} from 'react-native';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  IMAGE_CELL_HEIGHT,
  IMAGE_CELL_WIDTH,
  BACKGROUND_COLOR,
  BORDER_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_BG_COLOR,
} from '../../constants';

export const styles = StyleSheet.create({
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
  programContainer: {},
  horizontalScrollView: {backgroundColor: BACKGROUND_COLOR, marginLeft: -80},
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  logo: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  stickyHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
  },
  channelTitle: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 16,
  },
  fixedColumn: {
    marginTop: 50,
    backgroundColor: BACKGROUND_COLOR,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  horrizontalContainer: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#e1a21e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: DARK_BG_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 80,
    height: 50,
    right: 20,
    bottom: 20,
  },
  text: {
    color: 'white', // Color de texto negro
    fontWeight: 'bold', // Negrita
    fontSize: 18, // Tamaño del texto
  },
});
