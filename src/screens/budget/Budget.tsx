import {
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './Budget.style';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '@redux/Store';
import {getThemeColor} from '@utils/Color';
import {PieChart} from 'react-native-chart-kit';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  Container,
  GenericTextInput,
  DefaultButton,
} from 'components/Index';
import {Controller, useForm} from 'react-hook-form';
import {addExpense, addInCome, resetStore} from '@redux/actions/UserAction';
import {ExpenseListType} from '@redux/reducers/UserReducer';
import {Modal} from 'components/modal/Modal';
import {setExpenseAdded} from '@redux/actions/UserAction';

const categoryData: {[key: string]: {iconName: string; color: string}} = {
  Market: {iconName: 'bag-handle', color: '#61E4C5'},
  Elektronik: {iconName: 'headset', color: '#FF9692'},
  Yemek: {iconName: 'fast-food', color: '#2B87E3'},
  Giyim: {iconName: 'shirt', color: '#FFD465'},
  Fatura: {iconName: 'receipt', color: '#7743DB'},
  Ulaşım: {iconName: 'bus', color: '#A9A9A9'},
  Eğitim: {iconName: 'school', color: '#000000'},
  Oyun: {iconName: 'game-controller', color: '#FF8A00'},
  Seyahat: {iconName: 'airplane', color: '#FF89BB'},
  Sağlık: {iconName: 'fitness', color: '#F95A2B'},
  Hobi: {iconName: 'american-football', color: '#624D3B'},
  Oyuncak: {iconName: 'rocket', color: '#00A86B'},
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
  const [inComeVisible, setInComeVisible] = useState(false);
  const [expenseVisible, setExpenseVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
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
    dispatch(addExpense(userId, numberExpense, selectedCategory));
    dispatch(setExpenseAdded());
    setExpenseVisible(false);
  };
  const calculateCategorySpendings = () => {
    const categoryTotals: {[key: string]: number} = {};

    expenses.forEach(expense => {
      if (categoryTotals[expense.category]) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });

    return categoryTotals;
  };
  const getPieChartData = () => {
    const categorySpendings = calculateCategorySpendings();

    const sortedCategories = Object.keys(categorySpendings)
      .map(category => ({
        name: category,
        spend: categorySpendings[category],
        color: categoryData[category]?.color || 'grey',
      }))
      .sort((a, b) => b.spend - a.spend);

    const totalSpend = sortedCategories.reduce(
      (sum, category) => sum + category.spend,
      0,
    );

    const topCategories = sortedCategories.slice(0, 4);

    const otherSpend = sortedCategories
      .slice(4)
      .reduce((sum, category) => sum + category.spend, 0);

    if (otherSpend > 0) {
      topCategories.push({
        name: 'Diğer',
        spend: otherSpend,
        color: 'grey',
      });
    }

    return topCategories.map(category => ({
      name: category.name,
      spend: (category.spend / totalSpend) * 100,
      color: category.color,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));
  };

  const Graphic = () => {
    const pieChartData = getPieChartData();

    return (
      <View>
        <Text
          style={[styles.budgetTitle, {color: themeColors.titleDefault}]}
          text="Toplam Harcama"
        />
        <PieChart
          data={pieChartData}
          width={300}
          height={160}
          chartConfig={chartConfig}
          accessor={'spend'}
          backgroundColor={'transparent'}
          paddingLeft={'0'}
          center={[0, 0]}
        />
        <View
          style={{
            position: 'absolute',
            top: '35%',
            left: '10%',
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: 'white',
          }}
        />
      </View>
    );
  };

  const SpendList = () => {
    const sortedExpenses = expenses
      .map(expense => ({
        ...expense,
        id: expense.id,
      }))
      .sort((a, b) => Number(b.id) - Number(a.id))
      .slice(0, 10);

    return (
      <FlatList
        data={sortedExpenses}
        keyExtractor={item => item.id}
        renderItem={ExpenseList}
        style={{marginTop: -30, marginBottom: -30}}
        ListHeaderComponent={
          <View style={{padding: 10, marginBottom: 20}}>
            <Text
              text="Son Harcamalar"
              style={{fontSize: 18, fontWeight: 'bold'}}></Text>
          </View>
        }
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
            style={[styles.spendText, {color: 'themeColors.titleDefault'}]}
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
        <View
          style={{
            paddingVertical: 100,
            height: 440,
            marginTop: -60,
            width: 250,
          }}>
          <Text
            text="Gider Kategorisi Ekle"
            style={[
              styles.modalText,
              {color: themeColors.titleDefault, marginBottom: 20},
            ]}
          />
          <FlatList
            data={Object.keys(categoryData)}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.categoryItem,
                  item === selectedCategory && styles.selectedCategory,
                ]}
                onPress={() => {
                  setSelectedCategory(item);
                  setCategoryVisible(false);
                }}>
                <View style={styles.categoryFlatListContainer}>
                  <Icon
                    name={categoryData[item]?.iconName || 'help'}
                    size={24}
                    color={categoryData[item]?.color || 'grey'}
                    style={styles.flatListIcon}
                  />
                  <Text style={styles.categoryText} text={item} />
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={{marginTop: -80}}>
          <DefaultButton
            onPress={handleSubmit(onSubmitExpense)}
            text="Ekle"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
        <View></View>
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
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
        <Text
          style={[styles.title, {color: themeColors.budgetTitle}]}
          text="Bütçe"
        />
        <Text
          style={[styles.staticTitle, {color: themeColors.titleDefault}]}
          text="Toplam Para"
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
              width: 48,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setInComeVisible(true)}>
              <Icon name="trending-up" color="#00C6AE" size={35} />
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
              width: 48,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setExpenseVisible(true);
              }}>
              <Icon name="trending-down" color="#F95A2B" size={35} />
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
      </ScrollView>
    </SafeAreaView>
  );
};
