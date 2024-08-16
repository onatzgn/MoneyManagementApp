import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './Badge.style';
import Images from '@assets/Images';
import {Text} from '@components';

interface BadgeProps {
  backgroundColor: string;
  textVisible: boolean;
  text?: string;
}

export const Badge = ({
  backgroundColor = '#F5B942',
  textVisible,
  text = '',
}: BadgeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Image
          source={Images.badge}
          style={styles.logoHorizontal}
          resizeMode="contain"
        />
        <View
          style={[
            styles.badgeBackground,
            {backgroundColor: backgroundColor},
          ]}></View>
        <Image
          source={Images.star}
          style={styles.starIcon}
          resizeMode="contain"
        />
      </View>
      {textVisible && <Text text={text} style={styles.badgeText}></Text>}
    </View>
  );
};
