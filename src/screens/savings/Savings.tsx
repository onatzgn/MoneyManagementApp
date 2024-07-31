import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './Savings.style';
import {Text, Container} from '@components';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';

export const Savings = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView>
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
            <TouchableOpacity>
              <Icon
                name="add-outline"
                color={themeColors.titleDefault}
                size={42}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <Container children={undefined} />
        <Container children={undefined} />
      </ScrollView>
    </SafeAreaView>
  );
};
