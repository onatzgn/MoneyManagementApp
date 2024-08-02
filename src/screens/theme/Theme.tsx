import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToggleTheme} from '@redux/actions/ThemeAction';
import {RootState, useAppDispatch} from '@redux/Store';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {styles} from './Theme.style';

export const Theme = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const [toggleValue, setToggleValue] = useState(false);

  const ThemeToggle = () => {
    setToggleValue(!toggleValue);
    const newTheme = toggleValue ? 'dark' : 'light';
    dispatch(ToggleTheme(newTheme));
  };
  const ToggleActiveComponent = () => {
    <Icon name="sunny" size={20} color={themeColors.warning} />;
  };
  const ToggleInActiveComponent = () => {
    <Icon name="moon" size={20} />;
  };
  return (
    <View
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <View style={styles.container}>
        <Toggle
          value={toggleValue}
          onPress={ThemeToggle}
          thumbActiveComponent={ToggleActiveComponent}
          thumbInActiveComponent={ToggleInActiveComponent}
          thumbButton={{inActiveBackgroundColor: themeColors.gray}}
          trackBar={{
            activeBackgroundColor: themeColors.activeBackgroundColor,
            inActiveBackgroundColor: themeColors.inActiveBackgroundColor,
            borderActiveColor: themeColors.borderActiveColor,
            borderInActiveColor: themeColors.borderInActiveColor,
            borderWidth: 3,
            width: 100,
          }}
        />
      </View>
    </View>
  );
};
