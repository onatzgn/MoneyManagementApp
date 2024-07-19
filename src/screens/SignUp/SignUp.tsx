/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, Switch} from 'react-native';
import {styles} from './signUp.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '../../utils/color';
// import {ToggleTheme} from '../../redux/Actions/themeAction';
import {RootState, useAppDispatch} from '../../redux/store';

const SignUp = () => {
  //   const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  //   const toggleSwitch = (value: boolean) => {
  //     if (value) {
  //       dispatch(ToggleTheme('dark'));
  //     } else {
  //       dispatch(ToggleTheme('light'));
  //     }
  //   };
  return (
    <SafeAreaView
      style={[
        styles.signUpContainer,
        {backgroundColor: themeColors.background},
      ]}>
      {/* <Switch
        trackColor={{true: 'green'}}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === 'dark'}
      /> */}
    </SafeAreaView>
  );
};
export default SignUp;
