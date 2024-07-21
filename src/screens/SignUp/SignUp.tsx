import { SafeAreaView, Switch, Text, View } from 'react-native';
import { styles } from './signUp.style';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../utils/color';
import { ToggleTheme } from '../../redux/Actions/themeAction';
import { RootState, useAppDispatch } from '../../redux/store';
import GenericButton from '../../components/GenericButton/GenericButton';
import GenericTextInput from '../../components/GenericTextInput/GenericTextInput';
import { Controller, useForm } from 'react-hook-form';
import GenericLogo from '../../components/GenericLogo/GenericLogo';
import GenericText from '../../components/GenericText/GenericText';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeColors = getThemeColor(theme);
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phone: ''
    }
  })
  const toggleSwitch = (value: boolean) => {
    if (value) {
      dispatch(ToggleTheme('dark'));
    } else {
      dispatch(ToggleTheme('light'));
    }
  };
  const handleSignIn = () => navigation.navigate('SignIn')
  return (
    <SafeAreaView
      style={[
        styles.signUpContainer,
        { backgroundColor: themeColors.background },
      ]}>
      <View style={styles.inputContainer}>
        <GenericLogo text='Aramıza Hoşgeldin' color={themeColors.titleDefault} />
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
                iconName='person-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Ad Soyad'
                keyboardType='numeric' />
            )}
            name="fullName"
          />
          {errors.fullName && (<Text></Text>)}
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
                iconName='call-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Cep Telefonu'
                keyboardType='numeric' />
            )}
            name="phone"
          />
          {errors.phone && (<Text></Text>)}

          <GenericButton
            onPress={() => { console.log('dd') }}
            text="Kayıt Ol"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
        <View style={styles.signInButton}>
          <GenericText style={[{ color: themeColors.titleDefault }]} text='Ya da' />
          <GenericButton
            onPress={() => { handleSignIn() }}
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
export default SignUp;
