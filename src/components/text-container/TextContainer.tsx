import {Text} from '@components';
import React from 'react';
import {View} from 'react-native';
import {styles} from './TextContainer.style';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
interface TextContainerType {
  titleText: string;
  contentText: string;
}
export const TextContainer = ({titleText, contentText}: TextContainerType) => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  return (
    <View style={styles.personalInfo}>
      <Text
        style={[styles.title, {color: themeColors.titleDefault}]}
        text={titleText}
      />
      <Text style={[styles.content, {color: 'gray'}]} text={contentText} />
      <View style={styles.separator} />
    </View>
  );
};
