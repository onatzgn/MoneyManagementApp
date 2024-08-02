import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Logo.styles';
import {Text} from '../text/Text';
import Images from '@assets/Images';

interface LogoType {
  text: string;
  color: string;
}

export const Logo = ({text, color}: LogoType) => {
  return (
    <View style={styles.logoContainer}>
      <Image source={Images.crocodile} />
      <Text text={text} style={[styles.text, {color: color}]} />
    </View>
  );
};
