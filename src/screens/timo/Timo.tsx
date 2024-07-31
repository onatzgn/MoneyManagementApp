import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './Timo.style';
import {Text} from '@components';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';

export const Timo = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView>
        <Text
          style={[styles.title, {color: themeColors.budgetTitle}]}
          text="Timo"
        />
        <Text
          style={[styles.staticTitle, {color: themeColors.titleDefault}]}
          text="Hoşgeldin John,"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
