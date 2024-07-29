import {
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Budget.style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
import GenericText from '@components/text/Text';
import {PieChart} from 'react-native-chart-kit';
import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '@components/container/Container';
import {FlatList} from 'react-native-gesture-handler';

const data = [
  {
    name: 'Market',
    color: '#08A85C',
    spend: -264,
    iconName: 'bag-handle',
  },
  {
    name: 'Elektronik',
    color: '#9D43CC',
    spend: -1264,
    iconName: 'headset',
  },
  {
    name: 'Yemek',
    color: '#2B87E3',
    spend: -126,
    iconName: 'fast-food',
  },
];

const categoryData: {[key: string]: {iconName: string; color: string}} = {
  Market: {iconName: 'bag-handle', color: '#08A85C'},
  Elektronik: {iconName: 'headset', color: '#9D43CC'},
  Yemek: {iconName: 'fast-food', color: '#2B87E3'},
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  legendFontColor: '#7F7F7F',
  legendFontSize: 15,
};

const screenWidth = Dimensions.get('window').width;

const Budget = () => {
  const navigation = useNavigation<any>();
  const [toggleValue, setToggleValue] = useState(false);
  const budget = useSelector(
    (state: RootState) => state.persistedReducer.user.spend?.budget ?? 0,
  );
  const expenses = useSelector(
    (state: RootState) => state.persistedReducer.user.spend?.expenses ?? [],
  );
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const Graphic = () => {
    return (
      <View>
        <Toggle
          value={toggleValue}
          onPress={() => setToggleValue(!toggleValue)}
          leftComponent={
            <Icon
              size={20}
              name="timer-outline"
              color={themeColors.titleDefault}
            />
          }
          thumbButton={{
            width: 60,
            height: 35,
            activeBackgroundColor: themeColors.budgetTitle,
            inActiveBackgroundColor: themeColors.budgetTitle,
          }}
          trackBar={{
            activeBackgroundColor: 'white',
            inActiveBackgroundColor: 'white',
            borderWidth: 3,
            width: 110,
            height: 35,
            radius: 25,
          }}
          trackBarStyle={{backgroundColor: themeColors.signInUpButtonTextColor}}
          containerStyle={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            alignSelf: 'center',
            top: -30,
          }}
          rightComponent={
            <Icon
              size={20}
              color={themeColors.titleDefault}
              name="calendar-outline"
            />
          }
        />
        <GenericText
          style={[styles.budgetTitle, {color: themeColors.titleDefault}]}
          text="Aylık Harcama"
        />
        <PieChart
          data={data}
          width={300}
          height={160}
          chartConfig={chartConfig}
          accessor={'spend'}
          backgroundColor={'transparent'}
          paddingLeft={'0'}
          center={[0, 0]}
        />
      </View>
    );
  };

  const RenderSpending = ({
    item,
  }: {
    item: {category: string; amount: number; date: string};
  }) => {
    const {category} = item;
    const {iconName, color} = categoryData[category] || {
      iconName: 'help',
      color: 'grey',
    };

    return (
      <View style={styles.flatListItem}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Icon
            name={iconName}
            size={24}
            color={color}
            style={{marginRight: 10}}
          />
          <GenericText
            style={{color: themeColors.titleDefault, fontWeight: 'bold'}}
            text={category}
          />
          <View style={styles.spendTextContainer}>
            <GenericText
              style={[styles.spendText, {color: themeColors.titleDefault}]}
              text={`-${item.amount} ₺`}
            />
          </View>
        </View>
      </View>
    );
  };

  const Spending = () => {
    return (
      <View>
        <FlatList
          data={expenses}
          renderItem={RenderSpending}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <GenericText
        style={[styles.title, {color: themeColors.budgetTitle}]}
        text="Bütçe"
      />
      <GenericText
        style={[styles.staticTitle, {color: themeColors.titleDefault}]}
        text="Aylık Toplam Gelir"
      />
      <View style={{flexDirection: 'row'}}>
        <GenericText
          style={[styles.budgetsTitle, {color: themeColors.titleDefault}]}
          text={`${budget}₺`}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            position: 'absolute',
            right: 25,
            borderRadius: 25,
            borderBottomWidth: 4,
            borderColor: themeColors.titleDefault,
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon
              name="add-outline"
              color={themeColors.titleDefault}
              size={42}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Container children={Graphic()} />
      <Container children={Spending()} />
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
              <GenericText
                text="Gelir-Gider Ekleme modalı"
                style={[
                  styles.modalText,
                  {color: themeColors.titleDefault},
                ]}></GenericText>
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

export default Budget;
