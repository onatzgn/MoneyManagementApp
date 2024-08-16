import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './MissionCenter.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import {Text, Container, TopBoards, Missions, Badge} from '@components';

export const MissionCenter = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const BadgeCollection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
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
          <Container>
            <Text
              text="Rozet Koleksiyonu"
              style={{
                top: -30,
                fontSize: 20,
                left: 10,
                fontWeight: 'bold',
              }}></Text>
            {BadgeCollection()}
          </Container>
        </View>
        <Text text="Görevler" style={styles.subTitle}></Text>
        <Missions
          name="Hesap Uzmanı"
          description="Bütçe sayfasına bir harcama ekle"
          badgeColor="#E9E7FC"
          point={50}
        />
        <Missions
          name="Sadık Birikimci"
          description="Uygulamaya günlük giriş yap"
          badgeColor="#FFBD12"
          point={20}
        />
        <Missions
          name="Dünya Kaşifi"
          description="Dünya kumbarana yabancı para ekle"
          badgeColor="#8696BB"
          point={50}
        />
        <Missions
          name="Hedef Avcısı"
          description="Hayal kumbarandaki bir hedefine ulaş"
          badgeColor="#D6FCF7"
          point={200}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
