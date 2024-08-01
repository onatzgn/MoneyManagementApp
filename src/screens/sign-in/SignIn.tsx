import React, {useEffect, useState} from 'react';
import {SafeAreaView, Switch, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {getThemeColor} from '@utils/Color';
import {RootState, useAppDispatch} from '@redux/Store';
import {DefaultButton, GenericTextInput, Logo, Text} from 'components/Index';
import {UserSignInType} from '@utils/types/UserSignInType';
import {signInUser} from '@redux/actions/UserAction';
import {SIGNIN_FAILURE} from '@redux/types/User.types';
import {useNavigation} from '@react-navigation/native';
import {styles} from './SignIn.style';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const signIn = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn,
  );
  useEffect(() => {
    if (signIn && rememberMe && !errors) {
      reset({
        email: signIn.email,
        password: signIn.password,
      });
    } else if (!rememberMe) {
      reset({
        email: '',
        password: '',
      });
    }
  }, [navigation, signIn]);
  const onSubmit = async (data: UserSignInType) => {
    try {
      dispatch(signInUser(data));
    } catch (error) {
      dispatch({type: SIGNIN_FAILURE, payload: error});
    }
    if (signIn) {
      navigation.navigate('Tabs');
    }
  };
  const toggleSwitchRememberMe = (value: boolean) => {
    setRememberMe(value);
  };
  return (
    <SafeAreaView
      style={[
        styles.signInContainer,
        {backgroundColor: themeColors.background},
      ]}>
      <View style={styles.inputContainer}>
        <Logo text="Merhaba" color={themeColors.titleDefault} />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: 'E-posta boş bırakılamaz',
              minLength: {
                value: 5,
                message: 'E-posta en az 5 karakter uzunluğunda olmalıdır',
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
              required: 'Şifre boş kalamaz',
              minLength: {
                value: 5,
                message: 'Minimum 5 karakter',
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[styles.rememberMeText, {color: themeColors.titleDefault}]}
              text="Beni hatırla "
            />
            <Switch
              trackColor={{true: themeColors.titleGreen}}
              ios_backgroundColor={themeColors.titleDefault}
              onValueChange={toggleSwitchRememberMe}
              value={rememberMe}
            />
          </View>
          <DefaultButton
            onPress={handleSubmit(onSubmit)}
            text="Giriş Yap"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
