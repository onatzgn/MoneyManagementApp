import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './PointBar.styles';

interface GenericPointBarProps {
  text: string;
  containerStyle?: object;
}

const GenericPointBar: React.FC<GenericPointBarProps> = ({ text, containerStyle }) => {
  return (
    <View style={[styles.logoContainer, containerStyle]}>
      <Image
        source={require('../../assets/Animations/starIcon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.pointText}>{text}</Text>
    </View>
  );
};

export default GenericPointBar;
