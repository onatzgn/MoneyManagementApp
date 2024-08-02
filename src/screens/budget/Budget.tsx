import {
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {styles} from './Budget.style';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
import {PieChart} from 'react-native-chart-kit';
import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  Container,
  GenericTextInput,
  DefaultButton,
} from 'components/Index';
import {Controller, useForm} from 'react-hook-form';
import {addExpense, addInCome} from '@redux/actions/UserAction';
import {ExpenseListType} from '@redux/reducers/UserReducer';
import {Modal} from 'components/modal/Modal';

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

export const Budget = () => {
  const dispatch = useAppDispatch();
  const [toggleValue, setToggleValue] = useState(false);
  const [inComeVisible, setInComeVisible] = useState(false);
  const [expenseVisible, setExpenseVisible] = useState(false);
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const budget = useSelector(
    (state: RootState) => state.persistedReducer.user.budget ?? 0,
  );

  const userId = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn.id,
  );
  const expenses = useSelector(
    (state: RootState) => state.persistedReducer.user.expenses,
  );
  const {control, handleSubmit} = useForm({
    defaultValues: {
      inCome: '',
      expense: '',
      category: '',
    },
  });

  const onSubmitInCome = async (data: {inCome: string}) => {
    const numberInCome = parseInt(data.inCome, 10);
    dispatch(addInCome(userId, numberInCome));
  };
  const onSubmitExpense = async (data: {expense: string; category: string}) => {
    const numberExpense = parseInt(data.expense, 10);
    dispatch(addExpense(userId, numberExpense, data.category));
  };

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
          containerStyle={styles.containerStyle}
          rightComponent={
            <Icon
              size={20}
              color={themeColors.titleDefault}
              name="calendar-outline"
            />
          }
        />
        <Text
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
  const SpendList = () => {
    return (
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={ExpenseList}
      />
    );
  };
  const ExpenseList = ({item}: {item: ExpenseListType}) => {
    const {category} = item;
    const {iconName, color} = categoryData[category] || {
      iconName: 'help',
      color: 'grey',
    };
    return (
      <View style={styles.flatListContainer}>
        <Icon
          name={iconName}
          size={24}
          color={color}
          style={styles.flatListIcon}
        />
        <Text
          style={[styles.flatListText, {color: themeColors.titleDefault}]}
          text={category}
        />
        <View style={styles.spendTextContainer}>
          <Text
            style={[styles.spendText, {color: themeColors.titleDefault}]}
            text={`-${item.amount} ₺`}
          />
        </View>
      </View>
    );
  };
  const InComeModal = () => {
    return (
      <View style={styles.modalContainer}>
        <Text
          text="Gelir Ekle"
          style={[styles.modalText, {color: themeColors.titleDefault}]}
        />
        <Controller
          control={control}
          rules={{
            min: {
              value: 1,
              message: 'MSG',
            },
            minLength: {
              value: 1,
              message: 'Karakter uzunluğu en az 1 olmalıdır',
            },
          }}
          render={({field: {onBlur, onChange, value}}) => (
            <GenericTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
          )}
          name="inCome"
        />
        <DefaultButton
          onPress={handleSubmit(onSubmitInCome)}
          text="Ekle"
          backgroundColor={themeColors.signInUpButton}
          textColor={themeColors.signInUpButtonTextColor}
        />
        <Pressable
          style={[
            styles.button,
            styles.buttonClose,
            {backgroundColor: themeColors.background},
          ]}
          onPress={() => setInComeVisible(!inComeVisible)}>
          <Icon name="close" size={20} />
        </Pressable>
      </View>
    );
  };
  const ExpenseModal = () => {
    return (
      <View style={styles.modalContainer}>
        <Text
          text="Gider Ekle"
          style={[styles.modalText, {color: themeColors.titleDefault}]}
        />
        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            min: {
              value: 1,
              message: 'En az 1 karakter gerekli',
            },
            minLength: {
              value: 1,
              message: 'Karakter uzunluğu en az 1 olmalıdır',
            },
          }}
          render={({field: {onBlur, onChange, value}}) => (
            <GenericTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
          )}
          name="expense"
        />
        <Text
          text="Gider Kategorisi Ekle"
          style={[styles.modalText, {color: themeColors.titleDefault}]}
        />
        <Controller
          control={control}
          rules={{
            required: 'Bu alan boş bırakılamaz',
            min: {
              value: 1,
              message: 'MSG',
            },
            minLength: {
              value: 1,
              message: 'Karakter uzunluğu en az 1 olmalıdır',
            },
          }}
          render={({field: {onBlur, onChange, value}}) => (
            <GenericTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={false}
              keyboardType="default"
            />
          )}
          name="category"
        />
        <DefaultButton
          onPress={handleSubmit(onSubmitExpense)}
          text="Ekle"
          backgroundColor={themeColors.signInUpButton}
          textColor={themeColors.signInUpButtonTextColor}
        />
        <Pressable
          style={[
            styles.button,
            styles.buttonClose,
            {backgroundColor: themeColors.background},
          ]}
          onPress={() => setExpenseVisible(!expenseVisible)}>
          <Icon name="close" size={20} />
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <Text
        style={[styles.title, {color: themeColors.budgetTitle}]}
        text="Bütçe"
      />
      <Text
        style={[styles.staticTitle, {color: themeColors.titleDefault}]}
        text="Aylık Toplam Gelir"
      />
      <View style={{flexDirection: 'row'}}>
        <Text
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
          <TouchableOpacity onPress={() => setInComeVisible(true)}>
            <Icon
              name="add-outline"
              color={themeColors.titleDefault}
              size={42}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            position: 'absolute',
            right: 90,
            borderRadius: 25,
            borderBottomWidth: 4,
            borderColor: themeColors.titleDefault,
          }}>
          <TouchableOpacity
            onPress={() => {
              setExpenseVisible(true);
            }}>
            <Icon
              name="remove-outline"
              color={themeColors.titleDefault}
              size={42}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Container children={Graphic()} />
      <Container children={SpendList()} />
      <Modal
        visible={inComeVisible}
        onClose={() => setInComeVisible(!inComeVisible)}
        children={InComeModal()}></Modal>
      <Modal
        visible={expenseVisible}
        onClose={() => setExpenseVisible(!expenseVisible)}
        children={ExpenseModal()}></Modal>
    </SafeAreaView>
  );
};
