import {persistor, RootState, useAppDispatch} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './PersonalInformation.style';
import {LinkButton, Text} from '@components';
import {TextContainer} from 'components/text-container/TextContainer';
import { logOut } from '@redux/actions/UserAction';
import { useNavigation } from '@react-navigation/native';

export const PersonalInformation = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const user = useSelector(
    (state: RootState) => state.persistedReducer.user.signUp,
  );

  const HandleLogOut = () => {
    persistor.purge(); 

    dispatch(logOut())
    navigation.navigate('SignIn')
  }
  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <Text
        style={[styles.personalInfoText, {color: themeColors.budgetTitle}]}
        text="Kişisel Bilgiler"
      />
      <View style={{top: 50}}>
        <TextContainer titleText="Ad Soyad" contentText={user.fullName} />
        <TextContainer titleText="Email" contentText={user.email} />
        <TextContainer titleText="Cep Telefonu" contentText={user.phone} />
        <LinkButton onPress={HandleLogOut} text='Çıkış Yap' textColor='white' />
      </View>
    </SafeAreaView>
  );
};
