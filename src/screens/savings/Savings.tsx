import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './Savings.style';
import {Text, Container, Wishlist, Currency} from '@components';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';

export const Savings = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const WishlistItems = () => {
    return (
      <View style={{marginTop: -30}}>
        <Wishlist />
        <Wishlist />
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
            style={{
              borderWidth: 1,
              position: 'absolute',
              right: 25,
              borderRadius: 25,
              borderBottomWidth: 4,
              borderColor: themeColors.titleDefault,
            }}>
            <Icon
              name="add-outline"
              color={themeColors.titleDefault}
              size={42}
            />
          </TouchableOpacity>
        </View>
        <Container children={WishlistItems()} />
        <Container children={CurrencyItems()} />
      </ScrollView>
    </SafeAreaView>
  );
};
