import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  icon: string;
  color?: string;
}

const HeaderButton: React.FC<ButtonProps> = ({
  onPress,
  icon,
  color = 'white',
}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={icon} size={35} color={color} />
  </TouchableOpacity>
);

export default HeaderButton;
