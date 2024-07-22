import { SafeAreaView, Switch, Text, View } from 'react-native';
import { styles } from './signIn.style';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../utils/color';
import { ToggleTheme } from '../../redux/Actions/themeAction';
import { RootState, useAppDispatch } from '../../redux/store';
import { DefaultButton } from '../../components/GenericButton/GenericButton';
import GenericTextInput from '../../components/GenericTextInput/GenericTextInput';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import GenericLogo from '../../components/GenericLogo/GenericLogo';
import { UserSignInType } from '../../utils/types/UserSignInType';
import { signInRequest, signInUser } from '../../redux/Actions/userAction';
import { SIGNIN_FAILURE } from '../../redux/types/user.types';
import { useNavigation } from '@react-navigation/native';
import GenericText from '../../components/GenericText/GenericText';
import { useEffect, useState } from 'react';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>()
  const theme = useSelector((state: RootState) => state.persistedReducer.theme.theme);
  const themeColors = getThemeColor(theme);
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const signIn = useSelector((state:RootState)=> state.persistedReducer.user.signIn)
  useEffect(()=>{
    if(signIn && rememberMe && !errors){
      reset({
        email: signIn.email,
        password: signIn.password
      })  
    }
    else if(!rememberMe){
      reset({
        email: '',
        password: ''
      })  
    }
  }, [navigation, signIn])
  const onSubmit: SubmitHandler<UserSignInType> = async data => {
    dispatch(signInRequest())
    try{
      dispatch(signInUser(data))
    } catch(error){
      dispatch({type: SIGNIN_FAILURE, payload: error})
    }
    if(signIn){
      navigation.navigate('Home') 
    }
  }
  const toggleSwitchRememberMe = (value: boolean) => {
    setRememberMe(value)
  }
  const toggleSwitchTheme = (value: boolean) => {
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
                keyboardType='email-address'
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
                keyboardType='default' />
            )}
            name="password"  
          />
          {errors.password && (<Text></Text>)}
            <View style={{flexDirection: 'row'}}>
              <GenericText style={[styles.rememberMeText,{color: themeColors.titleDefault}]} text='Beni hatırla '/>
              <Switch
              trackColor={{ true: themeColors.titleGreen }}
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
      <Switch
        trackColor={{ true: themeColors.titleDefault }}
        ios_backgroundColor={themeColors.titleDefault}
        onValueChange={toggleSwitchTheme}
        value={theme === 'dark'}
      />
    </SafeAreaView>
  );
};
export default SignIn;
