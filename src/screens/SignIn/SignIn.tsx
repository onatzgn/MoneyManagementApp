import { SafeAreaView, Switch, Text, View } from 'react-native';
import { styles } from './signIn.style';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../utils/color';
import { ToggleTheme } from '../../redux/Actions/themeAction';
import { RootState, useAppDispatch } from '../../redux/store';
import GenericButton from '../../components/GenericButton/GenericButton';
import GenericTextInput from '../../components/GenericTextInput/GenericTextInput';
import { Controller, useForm } from 'react-hook-form';
import GenericLogo from '../../components/GenericLogo/GenericLogo';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const toggleSwitch = (value: boolean) => {
    if (value) {
      dispatch(ToggleTheme('dark'));
    } else {
      dispatch(ToggleTheme('light'));
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.signInContainer,
        { backgroundColor: themeColors.background },
      ]}>
      <View style={styles.inputContainer}>
        <GenericLogo text='Merhaba' color={themeColors.titleDefault} />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='mail-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Email'
                keyboardType='numeric'
              />
            )}
            name="email"
          />
          {errors.email && (<Text></Text>)}
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='key-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder='Şifre'
                keyboardType='numeric' />
            )}
            name="password"
          />
          {errors.password && (<Text></Text>)}

          <GenericButton
            onPress={() => { console.log('dd') }}
            text="Giriş Yap"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
      </View>
      <Switch
        trackColor={{ true: themeColors.titleDefault }}
        ios_backgroundColor={themeColors.titleDefault}
        onValueChange={toggleSwitch}
        value={theme === 'dark'}
      />
    </SafeAreaView>
  );
};
export default SignIn;
