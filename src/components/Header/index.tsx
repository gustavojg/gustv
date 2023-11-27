import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Icon name="person" size={35} color="white" />
      </TouchableOpacity>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={() => console.log('Search pressed')}>
        <Icon name="search" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
