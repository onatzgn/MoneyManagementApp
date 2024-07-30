import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Profile.style';
import {useEffect, useState} from 'react';
import {RootState} from '@redux/Store';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {DefaultButton, Text, GenericAvatar} from '@components';
import Images from '@assets/Images';

const MenuDatas = [
  {id: '1', title: 'Hesap', color: '#FFBD11'},
  {id: '2', title: 'Tema', color: '#62E4C6'},
  {id: '3', title: 'Item 3', color: '#FF9692'},
];

export const Profile = () => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const currentUser = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn,
  );
  useEffect(() => {
    console.log('fullName: ', currentUser);
  }, [navigation]);
  const renderMenuItems = ({
    item,
  }: {
    item: {id: string; title: string; color: string};
  }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={[styles.itemCircle, {backgroundColor: item.color}]}></View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 15,
            fontWeight: 'bold',
            color: themeColors.titleDefault,
          }}
          text={item.title}
        />
        <Icon
          style={{position: 'absolute', right: 20}}
          color={themeColors.profileIcon}
          size={20}
          name="chevron-forward-outline"
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {backgroundColor: themeColors.profileBackground},
      ]}>
      <View
        style={[
          styles.profileContainer,
          {backgroundColor: themeColors.profilePanel},
        ]}>
        <Text
          style={[styles.title, {color: themeColors.profileTitle}]}
          text="Profil"
        />
        <GenericAvatar style={styles.avatar} source={Images.crocodile} size={150} />
        <Text
          style={[styles.fullName, {color: themeColors.profileTitle}]}
          text="Fatma Yılmaz"
        />

        <View style={styles.profileNav}>
          <View style={styles.parentIntro}>
            <DefaultButton
              backgroundColor={themeColors.profileButton}
              buttonSize={150}
              textSize={16}
              text="Ebeveyn Bilgisi"
              onPress={() => setModalVisible(true)}
              textColor={themeColors.titleDefault}></DefaultButton>
          </View>
          <TouchableOpacity
            style={[
              styles.parentUpdate,
              {backgroundColor: themeColors.profileButton},
            ]}>
            <Icon
              style={styles.icon}
              name="create-outline"
              color={themeColors.profileIcon}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.menuContainer,
          {backgroundColor: themeColors.profileContainer},
        ]}>
        <FlatList
          data={MenuDatas}
          renderItem={renderMenuItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View
              style={[
                styles.modalView,
                {backgroundColor: themeColors.background},
              ]}>
              <Text
                text="Ebeveyn Bilgisi"
                style={[
                  styles.modalText,
                  {color: themeColors.titleDefault},
                ]}></Text>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {backgroundColor: themeColors.background},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={20} />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
