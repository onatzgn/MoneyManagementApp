import React from 'react';
import {SafeAreaView, Switch, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {getThemeColor} from '@utils/Color';
import {ToggleTheme} from '@redux/actions/ThemeAction';
import {RootState, useAppDispatch} from '@redux/Store';
import {
  Text,
  Logo,
  GenericMaskInput,
  GenericTextInput,
  DefaultButton,
  LinkButton,
} from 'components/Index';
import {useNavigation} from '@react-navigation/native';
import {UserSignUpType} from '@utils/types/UserSignUpType';
import {signUpUser} from '@redux/actions/UserAction';
import {SIGNUP_FAILURE} from '@redux/types/User.types';
import styles from './SignUp.style';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phone: '',
    },
  });
  const onSubmit = async (data: UserSignUpType) => {
    try {
      dispatch(signUpUser(data));
    } catch (error) {
      dispatch({type: SIGNUP_FAILURE, payload: error});
    }
  };
  const toggleSwitch = (value: boolean) => {
    if (value) {
      dispatch(ToggleTheme('dark'));
    } else {
      dispatch(ToggleTheme('light'));
    }
  };
  const handleSignIn = () => navigation.navigate('SignIn');
  return (
    <SafeAreaView
      style={[
        styles.signUpContainer,
        {backgroundColor: themeColors.background},
      ]}>
      <View style={styles.inputContainer}>
        <Logo text="Aramıza Hoşgeldin" color={themeColors.titleDefault} />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: 'Ad Soyad boş bırakılamaz',
              minLength: {
                value: 2,
                message: 'Ad Soyad en az 5 karakter uzunluğunda olmalıdır',
              },
            }}
            render={({field: {onBlur, onChange, value}}) => (
              <GenericTextInput
                iconName="person-outline"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder="Ad Soyad"
                keyboardType="numeric"
                errorMessage={errors.fullName?.message}
              />
            )}
            name="fullName"
          />
          <Controller
            control={control}
            rules={{
              required: 'E-posta boş bırakılamaz',
              minLength: {
                value: 8,
                message: 'E posta en az 8 karakter uzunluğunda olmalıdır',
              },
            }}
            render={({field: {onBlur, onChange, value}}) => (
              <GenericTextInput
                iconName="mail-outline"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder="Email"
                keyboardType="email-address"
                errorMessage={errors.email?.message}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: 'Şifre boş bırakılamaz',
              minLength: {
                value: 4,
                message: 'Şifre en az 4 karakter uzunluğunda olmalıdır',
              },
            }}
            render={({field: {onBlur, onChange, value}}) => (
              <GenericTextInput
                iconName="key-outline"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder="Şifre"
                keyboardType="default"
                errorMessage={errors.password?.message}
              />
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{
              required: 'Cep Telefonu boş bırakılamaz',
              minLength: {
                value: 17,
                message: 'Cep Telefonu en az 11 karakter olmalıdır',
              },
            }}
            render={({field: {onBlur, onChange, value}}) => (
              <GenericMaskInput
                iconName="call-outline"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder="+90-5XX-XXX-XX-XX"
                keyboardType="name-phone-pad"
                errorMessage={errors.phone?.message}
              />
            )}
            name="phone"
          />
          <DefaultButton
            onPress={handleSubmit(onSubmit)}
            text="Kayıt Ol"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
        <View style={styles.signInButton}>
          <Text
            style={[{color: themeColors.titleDefault}]}
            text="Hesabınız varsa"
          />
          <LinkButton
            onPress={() => {
              handleSignIn();
            }}
            text="Giriş Yapın"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.titleDefault}
          />
        </View>
      </View>
      <Switch
        trackColor={{true: themeColors.titleDefault}}
        ios_backgroundColor={themeColors.titleDefault}
        onValueChange={toggleSwitch}
        value={theme === 'dark'}
      />
    </SafeAreaView>
  );
};
export default SignUp;
