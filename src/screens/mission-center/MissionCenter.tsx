import React, { useEffect } from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity, Platform} from 'react-native';
import {styles} from './MissionCenter.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState, useAppDispatch} from '@redux/Store';
import {Text, Container, TopBoards, Missions, Badge} from '@components';
import axios from 'axios';
import { addExpensesSuccess, setExpenseAdded, updateExpenseAdded, updateScoreSuccess } from '@redux/actions/UserAction';

export const MissionCenter = () => {
  const dispatch = useAppDispatch();

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const userId = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn.id,
  );
  const baseUrl = () => {
    console.log('os', Platform.OS);
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:4000';
    }
    return 'http://localhost:4000';
  };
  useEffect(() => {
    if (userId) {
      axios
        .get(`${baseUrl()}/users/${userId}`)
        .then(response => {
          const userScore = response.data.score;
          const userHasExpenseAdded = response.data.hasExpenseAdded;
          dispatch(updateScoreSuccess(userScore));
          dispatch(updateExpenseAdded(userHasExpenseAdded));
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [userId]);

  const BadgeCollection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          justifyContent: 'space-evenly',
        }}>
        <Badge
          textVisible={true}
          backgroundColor={'#E9E7FC'}
          text="Hesap Uzmanı"
        />
        <Badge
          textVisible={true}
          backgroundColor={'#FFBD12'}
          text="Sadık Birikimci"
        />
        <Badge
          textVisible={true}
          backgroundColor={'#8696BB'}
          text="Dünya Kaşifi"
        />
        <Badge
          textVisible={true}
          backgroundColor={'#D6FCF7'}
          text="Hedef Avcısı"
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {backgroundColor: themeColors.missionCenterBackground},
      ]}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
        <Text
          style={[styles.title, {color: themeColors.missionCenterTitle}]}
          text="Görev Merkezi"
        />
        <View>
          <TopBoards></TopBoards>
        </View>
        <View style={{marginBottom: -30}}>
          <Container containerStyle={styles.badgeContainer}>
            <Text
              text="Rozet Koleksiyonu"
              style={{
                top: -30,
                fontSize: 22,
                left: 10,
                fontWeight: 'bold',
                color:'white'
              }}></Text>
            {BadgeCollection()}
          </Container>
        </View>
        <Text text="Görevler" style={styles.subTitle}></Text>
        <Missions
          id={1}
          name="Hesap Uzmanı"
          description="Bütçe sayfasına bir harcama ekle"
          badgeColor="#E9E7FC"
          point={50}
        />
        <Missions
          id={2}
          name="Sadık Birikimci"
          description="Uygulamaya günlük giriş yap"
          badgeColor="#FFBD12"
          point={20}
        />
        <Missions
          id={3}
          name="Dünya Kaşifi"
          description="Dünya kumbarana yabancı para ekle"
          badgeColor="#8696BB"
          point={50}
        />
        <Missions
          id={4}
          name="Hedef Avcısı"
          description="Hayal kumbarandaki bir hedefine ulaş"
          badgeColor="#D6FCF7"
          point={200}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
