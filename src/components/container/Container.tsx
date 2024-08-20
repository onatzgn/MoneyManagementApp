import React from 'react';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './Container.style';
import {ReactNode} from 'react';

interface ContainerType {
  children: ReactNode;
  containerStyle?: object;
}
export const Container = ({children,containerStyle}: ContainerType) => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <View
      style={[
        styles.contentContainer,
        {backgroundColor: themeColors.profileContainer},
        containerStyle
      ]}>
      {children}
    </View>
  );
};
