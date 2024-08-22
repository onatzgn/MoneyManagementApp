import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Text, AccordionButton} from '@components';
import {styles} from './Wishlist.style';
import {RootState, useAppDispatch} from '@redux/Store';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import * as Progress from 'react-native-progress';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '@assets/Icons';

interface WishlistProps {
  id: number;
  title: string;
  dailyGoal: number;
  totalAmount: number;
  startDate: string;
  endDate: string;
  onDelete: () => void;
}

export const Wishlist = ({
  id,
  title,
  dailyGoal,
  totalAmount,
  startDate,
  endDate,
  onDelete,
}: WishlistProps) => {
  const dispatch = useAppDispatch();
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);
  const progress = useSelector(
    (state: RootState) =>
      state.persistedReducer.user.wishlists.find((w: any) => w.id === id)
        ?.progress || 0,
  );
  const wishlistCompleted = useSelector(
    (state: RootState) => state.persistedReducer.user.wishlistCompleted,
  );

  const progressPercentage = (value: number) => {
    const newProgress = value / totalAmount;
    return newProgress;
  };

  const newProgress = progress / totalAmount;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeColors.wishlistBackground},
      ]}>
      <Text
        text={title}
        style={[styles.title, {color: themeColors.wishlistTitle}]}></Text>
      <Text text={`Günlük Hedef: ${dailyGoal}₺`} style={styles.content}></Text>
      <Text
        text={`${totalAmount}₺`}
        style={[
          styles.totalAmount,
          {color: themeColors.wishlistProgressBar},
        ]}></Text>
      <View style={styles.deleteButton}>
        <TouchableOpacity onPress={onDelete}>
          <Image
            source={Icons.deleteIcon}
            resizeMode="contain"
            style={styles.deleteIcon}
            tintColor="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <Progress.Bar
          progress={newProgress}
          width={290}
          height={10}
          borderRadius={20}
          color={themeColors.wishlistProgressBar}
          unfilledColor={themeColors.wishlistUnfilledProgress}
          borderWidth={0}
        />
      </View>
      <Text
        text={`Başlangıç Tarihi: ${startDate}`}
        style={styles.content}></Text>
      <Text text={`💰${progress}₺`} style={styles.progressContent}></Text>
      {newProgress < 1 ? (
        <Text
          text={`${endDate} tarihinde ${title} sahibi olacaksın 🎉`}
          style={[styles.subContent, {color: themeColors.wishlistSubcontent}]}
        />
      ) : (
        <Text
          text="Tebrikler! Hedefinize ulaştınız 👏"
          style={styles.subContent}
        />
      )}
      <View style={styles.moneyButton}>
        <AccordionButton
          dailyGoalInput={dailyGoal}
          onSave={progressPercentage}
          wishlistId={id}
        />
      </View>
    </View>
  );
};
