import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './TopBoards.style';
import Images from '@assets/Images';
import Icons from '@assets/Icons';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';

export const TopBoards = () => {
  const score = useSelector(
    (state: RootState) => state.persistedReducer.user.score,
  );
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  return (
    <View style={styles.container}>
      <View
        style={[styles.pointBox, {backgroundColor: themeColors.topBoardItems}]}>
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
      <View
        style={[
          styles.leaderBoardBox,
          {backgroundColor: themeColors.topBoardItems},
        ]}>
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
