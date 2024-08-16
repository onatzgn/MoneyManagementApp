import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './PointBar.styles';
import {Text} from 'components/Index';
import Images from '@assets/Images';

interface PointBarProps {
  text: string;
  containerStyle?: object;
}

export const PointBar = ({text, containerStyle}: PointBarProps) => {
  return (
    <View style={[styles.logoContainer, containerStyle]}>
      <Image
        source={Images.starIcon}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text text={text} style={styles.pointText}></Text>
    </View>
  );
};

export const PointBarHorizontal = ({text, containerStyle}: PointBarProps) => {
  return (
    <View style={[styles.logoContainer, containerStyle]}>
      <Image
        source={Images.starIcon}
        style={styles.logoHorizontal}
        resizeMode="contain"
      />
      <Text text={text} style={styles.pointTextHorizontal}></Text>
    </View>
  );
};
