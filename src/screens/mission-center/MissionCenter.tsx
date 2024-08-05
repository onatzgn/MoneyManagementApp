import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './MissionCenter.style';
import {Text} from '@components';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';

export const MissionCenter = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {backgroundColor: themeColors.missionCenterBackground},
      ]}>
      <ScrollView>
        <Text
          style={[styles.title, {color: themeColors.missionCenterTitle}]}
          text="Görev Merkezi"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
