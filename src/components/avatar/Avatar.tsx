import React from 'react';
import {Avatar} from 'react-native-paper';
import {ImageSourcePropType, StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './Avatar.style';

export interface AvatarProps {
    size?: number;
    source: ImageSourcePropType;
    borderColor?: string;
    borderWidth?: number;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
  }
  
const GenericAvatar = ({size = 80, source, style}: AvatarProps) => {
  return (
    <View style={style}>
      <Avatar.Image
        size={size}
        source={source}
        style={[styles.avatar, styles.avatarContainer]}
      />
    </View>
  );
};

export default GenericAvatar;