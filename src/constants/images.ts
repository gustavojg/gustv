import {ImageSourcePropType} from 'react-native';

export type ImageKeys =
  | 'sky1'
  | 'silver'
  | 'hbo'
  | 'cw'
  | 'vox'
  | 'history'
  | 'sixx'
  | 'tv2norway'
  | 'channel5'
  | 'vikingsImg'
  | 'logo'
  | 'noPhoto';

type ImagesType = {
  [key in ImageKeys]: ImageSourcePropType;
};

export const images: ImagesType = {
  sky1: require('../assets/sky1.png'),
  silver: require('../assets/silver.png'),
  hbo: require('../assets/hbo.png'),
  cw: require('../assets/cw.png'),
  vox: require('../assets/vox.png'),
  history: require('../assets/history.png'),
  sixx: require('../assets/sixx.png'),
  tv2norway: require('../assets/tv2norway.png'),
  channel5: require('../assets/channel5.png'),
  vikingsImg: require('../assets/vikings.webp'),
  logo: require('../assets/logo.png'),
  noPhoto: require('../assets/noPhoto.png'),
};
