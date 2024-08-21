import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './TopBoards.style';
import Images from '@assets/Images';
import Icons from '@assets/Icons';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/Store';

export const TopBoards = () => {
    const score = useSelector(
        (state: RootState) => state.persistedReducer.user.score,
      );
  return (
    <View style={styles.container}>
      <View style={styles.pointBox}>
        <Text style={styles.text}>Haftalık Skor</Text>
        <View style={styles.row}>
          <Image
            source={Images.greenStarIcon}
            style={styles.pointLogo}
            resizeMode="contain"
          />
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>
      <View style={styles.leaderBoardBox}>
        <Image
          source={Icons.awardIcon}
          style={styles.awardLogo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Liderlik Tablosu</Text>
      </View>
    </View>
  );
};
