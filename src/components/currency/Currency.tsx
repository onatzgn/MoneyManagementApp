import React from 'react';
import {View} from 'react-native';
import {Text, AccordionButtonVertical} from '@components';
import {styles} from './Currency.style';
import {RootState} from '@redux/Store';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';

interface CurrencyProps {
  title: string;
  color: string;
  unit: string;
}

export const Currency = ({title, color, unit}: CurrencyProps) => {
  return (
    <View style={[styles.container,{backgroundColor: color}]}>
      <Text text={title} style={styles.title}></Text>
      <Text text={unit} style={styles.content}></Text>
      <View style={styles.moneyButton}>
        <AccordionButtonVertical />
      </View>
    </View>
  );
};
