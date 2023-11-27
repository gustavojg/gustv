import {Dimensions, StyleSheet} from 'react-native';
import {DARK_BG_COLOR, IMAGE_HEIGHT, IMAGE_WIDTH} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG_COLOR, // Asumiendo un fondo negro como en la imagen
  },
  textsContainer: {flexDirection: 'row', marginBottom: 20},
  image: {
    width: 120,
    height: 100,
    resizeMode: 'cover',
  },
  imageBackground: {
    flex: 1,
    height: Dimensions.get('window').height / 2.5,
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 20,
  },
  channelName: {
    color: '#FFF',
    textTransform: 'uppercase',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  logo: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  programmeTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    color: '#FFF',
    marginRight: 10,
    opacity: 0.8,
  },
  description: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'auto',
    marginBottom: 10,
  },
  cast: {
    color: '#FFF',
    opacity: 0.8,
    fontSize: 15,
    lineHeight: 20,
  },
  creators: {
    color: '#FFF',
    opacity: 0.8,
    fontSize: 15,
    lineHeight: 20,
  },
});
