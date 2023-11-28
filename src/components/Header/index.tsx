import React, {ReactNode} from 'react';
import {View, Image, StatusBar, Platform} from 'react-native';
import {styles} from './styles';
import {images} from '../../constants/images';

interface HeaderProps {
  leftElement: ReactNode;
  rightElement: ReactNode;
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({
  leftElement,
  rightElement,
  backgroundColor,
}) => {
  return (
    <View style={{...styles.headerContainer, backgroundColor}}>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'dark-content' : 'light-content'}
      />
      {leftElement}
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
      {rightElement}
    </View>
  );
};

export default Header;
