import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import {styles} from './Savings.style';
import {Text, Container, Wishlist, Currency} from '@components';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export const Savings = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

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
      const totalDays = Math.ceil(
        wishlistData.totalAmount / wishlistData.dailyGoal,
      );
      const startDate = new Date(date);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + totalDays);
      const formattedEndDate = endDate.toLocaleDateString('en-GB');
      onAdd({...wishlistData, endDate: formattedEndDate});
      setWishlistData({
        id: idCounter,
        title: '',
        dailyGoal: 0,
        totalAmount: 0,
        startDate: '',
        endDate: '',
      });
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
          <TextInput
            placeholder="Start Date"
            value={wishlistData.startDate}
            style={styles.modalInput}
            onFocus={() => setShowDatePicker(true)}
          />
          <TextInput
            placeholder="End Date"
            value={wishlistData.endDate}
            editable={false}
            style={styles.modalInput}
          />

          <Button title="Add Wishlist Item" onPress={handleAddWishlistItem} />
          <Button title="Cancel" onPress={onClose} />
          <Text text={wishlistData.endDate}></Text>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </Modal>
    );
  };
  const [idCounter, setIdCounter] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addWishlistItem = (item: WishlistItem) => {
    setWishlistItems([...wishlistItems, {...item, id: idCounter}]);
    setIdCounter(idCounter + 1);
    setModalVisible(false);
  };

  const deleteWishlistItem = (id: number) => {
    setWishlistItems(prevWishlists =>
      prevWishlists.filter(wishlist => wishlist.id !== id),
    );
  };

  const WishlistItems = () => {
    return (
      <View style={{marginTop: -20}}>
        {wishlistItems.map((item, index) => (
          <Wishlist
            key={item.id}
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
          text="Biriken Tasarruf"
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[styles.budgetsTitle, {color: themeColors.titleDefault}]}
            text="1000₺"
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
