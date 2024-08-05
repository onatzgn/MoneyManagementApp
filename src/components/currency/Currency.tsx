import React from 'react';
import {View} from 'react-native';
import {Text, AccordionButtonVertical} from '@components';
import {styles} from './Currency.style';
import {RootState} from '@redux/Store';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';

export const Currency = () => {
  return (
    <View style={styles.container}>
      <Text text="Euro" style={styles.title}></Text>
      <Text text="0€" style={styles.content}></Text>
      <View style={styles.moneyButton}>
        <AccordionButtonVertical />
      </View>
    </View>
  );
};
