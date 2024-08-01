import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToggleTheme} from '@redux/actions/ThemeAction';
import {RootState, useAppDispatch} from '@redux/Store';
import {View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';

export const Theme = () => {
  const dispatch = useAppDispatch();
  const [toggleValue, setToggleValue] = useState(false);
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const ThemeToggle = () => {
    setToggleValue(!toggleValue);
    if (toggleValue) {
      dispatch(ToggleTheme('dark'));
    } else {
      dispatch(ToggleTheme('light'));
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: themeColors.background}}>
      <View
        style={{
          position: 'absolute',
          marginTop: verticalScale(100),
          width: '100%',
          alignItems: 'center',
          
        }}>
        <Toggle
          value={toggleValue}
          onPress={() => {
            ThemeToggle();
          }}
          thumbActiveComponent={
            <Icon name="sunny" size={20} color={'orange'} />
          }
          thumbInActiveComponent={<Icon name="moon" size={20} />}
          thumbButton={{
            inActiveBackgroundColor: 'gray',
          }}
          trackBar={{
            activeBackgroundColor: '#9ee3fb',
            inActiveBackgroundColor: '#3c4145',
            borderActiveColor: '#86c3d7',
            borderInActiveColor: '#1c1c1c',
            borderWidth: 3,
            width: 100,
          }}
        />
      </View>
    </View>
  );
};
