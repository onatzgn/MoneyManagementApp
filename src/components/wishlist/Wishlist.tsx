import React from 'react';
import {View} from 'react-native';
import {Text, AccordionButton} from '@components';
import {styles} from './Wishlist.style';
import {RootState} from '@redux/Store';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import * as Progress from 'react-native-progress';

export const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Text text="Playstation 5" style={styles.title}></Text>
      <Text text='Günlük Hedef:50₺' style={styles.content}></Text>
      <View style = {styles.progressBar}>
      <Progress.Bar progress={0.3} width={280} height={10} borderRadius={20} color='#32FC65' unfilledColor='#A5FCCB' borderWidth={0}/>
      </View>
      <Text text='Başlangıç Tarihi:12 Mart' style={styles.content}></Text>
      <Text text='Bitiş Tarihi:24 Aralık' style={styles.content}></Text>
      <View style = {styles.moneyButton}>
        <AccordionButton/>
      </View>
    </View>
  );
};
