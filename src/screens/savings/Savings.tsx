import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import {styles} from './Savings.style';
import {Text, Container, Wishlist, Currency} from '@components';
import {useSelector, useDispatch} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState, useAppDispatch} from '@redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  addWishlist,
  addWishlistSuccess,
  deleteWishlist,
} from '@redux/actions/UserAction';
import UserReducer from '@redux/reducers/UserReducer';
import {Controller, useForm} from 'react-hook-form';
import axios from 'axios';

interface WishlistModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (item: WishlistItem) => void;
}

interface WishlistItem {
  id: number;
  title: string;
  dailyGoal: number;
  totalAmount: number;
  startDate: string;
  endDate: string;
}

const baseUrl = () => {
  console.log('os', Platform.OS);
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:4000';
  }
  return 'http://localhost:4000';
};

export const Savings = () => {
  const dispatch = useAppDispatch();

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const wishlists = useSelector(
    (state: RootState) => state.persistedReducer.user.wishlists,
  );
  const userId = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn.id,
  );
  const budget = useSelector(
    (state: RootState) => state.persistedReducer.user.budget ?? 0,
  );
  const idCounter = useSelector(
    (state: RootState) => state.persistedReducer.user.idCounter,
  );

  useEffect(() => {
    if (userId) {
      axios
        .get(`${baseUrl()}/users/${userId}`)
        .then(response => {
          const userWishlists = response.data.wishlists;
          dispatch(addWishlistSuccess(userWishlists));
        })
        .catch(error => {
          console.log('Error loading wishlists:', error);
        });
    }
  }, [userId]);

  const {control, handleSubmit} = useForm({
    defaultValues: {
      title: '',
      dailyGoal: 0,
      totalAmount: 0,
      startDate: '',
      endDate: '',
    },
  });

  const WishlistModal = ({visible, onClose, onAdd}: WishlistModalProps) => {
    const [wishlistData, setWishlistData] = useState({
      id: idCounter,
      title: '',
      dailyGoal: 0,
      totalAmount: 0,
      startDate: '',
      endDate: '',
    });
    const handleAddWishlistItem = () => {
      console.log('handleAddWishListItem', wishlists);
      const totalDays = Math.ceil(
        wishlistData.totalAmount / wishlistData.dailyGoal,
      );
      const startDate = new Date(date);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + totalDays);
      const formattedEndDate = endDate.toLocaleDateString('en-GB');

      dispatch(
        addWishlist(
          userId,
          idCounter,
          wishlistData.title,
          wishlistData.dailyGoal,
          wishlistData.totalAmount,
          wishlistData.startDate,
          formattedEndDate,
        ),
      );

      onAdd({...wishlistData, endDate: formattedEndDate});
      setWishlistData({
        id: idCounter + 1,
        title: '',
        dailyGoal: 0,
        totalAmount: 0,
        startDate: '',
        endDate: '',
      });
      onClose();
    };

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(false);
      setDate(currentDate);
      const formattedDate = currentDate.toLocaleDateString('en-GB');
      setWishlistData({...wishlistData, startDate: formattedDate});
    };

    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Title"
            value={wishlistData.title}
            onChangeText={text =>
              setWishlistData({...wishlistData, title: text})
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="Daily Goal"
            value={wishlistData.dailyGoal.toString()}
            onChangeText={text =>
              setWishlistData({...wishlistData, dailyGoal: parseFloat(text)})
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="Total Amount"
            value={wishlistData.totalAmount.toString()}
            onChangeText={text =>
              setWishlistData({...wishlistData, totalAmount: parseFloat(text)})
            }
            style={styles.modalInput}
          />
          <View style={{marginRight: 275, marginTop: 10}}>
            <DateTimePicker
              value={date}
              mode={'date'}
              is24Hour={true}
              onChange={onChange}
            />
          </View>

          <Button title="Add Wishlist Item" onPress={handleAddWishlistItem} />
          <Button title="Cancel" onPress={onClose} />
          <Text text={wishlistData.endDate}></Text>
        </View>
      </Modal>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addWishlistItem = (item: WishlistItem) => {
    setWishlistItems([...wishlistItems, {...item, id: idCounter}]);
    setModalVisible(false);
    console.log('addwishlistitem', wishlists);
  };

  const deleteWishlistItem = (id: number) => {
    dispatch(deleteWishlist(userId, id));
  };

  console.log(wishlists);
  const WishlistItems = () => {
    console.log('WishListItems', wishlists);
    const emptyWishlistMessage =
      'Henüz bir şey eklemedin!\nHadi, hayalini kurduğun ürünleri eklemeye başla!';
    if (!wishlists || wishlists.length === 0) {
      return (
        <Text text={emptyWishlistMessage} style={{textAlign: 'center'}}></Text>
      );
    }
    return (
      <View style={{marginTop: -20}}>
        {wishlists.map(item => (
          <Wishlist
            key={item.id}
            id={item.id}
            title={item.title}
            dailyGoal={item.dailyGoal}
            totalAmount={item.totalAmount}
            startDate={item.startDate}
            endDate={item.endDate}
            onDelete={() => deleteWishlistItem(item.id)}
          />
        ))}
      </View>
    );
  };

  const CurrencyItems = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Currency />
        <Currency />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}>
        <Text
          style={[styles.title, {color: themeColors.budgetTitle}]}
          text="Kumbara"
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
            style={[styles.addButton, {borderColor: themeColors.titleDefault}]}
            onPress={() => setModalVisible(true)}>
            <Icon
              name="add-outline"
              color={themeColors.titleDefault}
              size={42}
            />
          </TouchableOpacity>
        </View>
        <Container>{WishlistItems()}</Container>
        <Container>{CurrencyItems()}</Container>
        <WishlistModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={addWishlistItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
