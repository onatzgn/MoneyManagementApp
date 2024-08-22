import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {Text, Container, PointBarHorizontal, Badge} from '@components';
import {styles} from './Missions.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Images from '@assets/Images';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '@redux/Store';
import {
  expenseAddMission,
  setExpenseAdded,
  updateScore,
} from '@redux/actions/UserAction';
import {getThemeColor} from '@utils/Color';

interface MissionProps {
  id: number;
  name: string;
  description: string;
  badgeColor: string;
  point: number;
}

export const Missions = ({
  id,
  name,
  description,
  badgeColor,
  point,
}: MissionProps) => {
  const dispatch = useAppDispatch();

  const [buttonState, setButtonState] = useState(0);
  const expenseAdded = useSelector(
    (state: RootState) => state.persistedReducer.user.hasExpenseAdded,
  );
  const userId = useSelector(
    (state: RootState) => state.persistedReducer.user.signIn.id,
  );
  const score = useSelector(
    (state: RootState) => state.persistedReducer.user.score,
  );
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  useEffect(() => {
    if (id === 1) {
      if (expenseAdded >= 2) {
        setButtonState(2);
      } else if (expenseAdded > 0) {
        setButtonState(1);
      } else {
        setButtonState(0);
      }
    }
  }, [expenseAdded, id]);

  const handleButtonPress = () => {
    if (buttonState === 1) {
      dispatch(expenseAddMission(userId));
      setButtonState(2);
      dispatch(updateScore(userId, point));
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themeColors.containerBackground},
      ]}>
      <Badge backgroundColor={badgeColor} textVisible={false}></Badge>
      <View style={styles.textContainer}>
        <Text
          text={name}
          style={[
            styles.name,
            {color: themeColors.misssionContentText},
          ]}></Text>
        <Text
          text={description}
          style={[
            styles.description,
            {color: themeColors.misssionContentText},
          ]}></Text>
      </View>
      {buttonState === 0 && (
        <View style={styles.pointsContainer2}>
          <PointBarHorizontal
            text={point.toString()}
            containerStyle={styles.pointBarStyle}
          />
        </View>
      )}

      {buttonState === 1 && (
        <View style={styles.pointsContainer}>
          <PointBarHorizontal
            text={point.toString()}
            containerStyle={styles.pointBarStyle}
          />
        </View>
      )}
      {buttonState !== 0 && (
        <TouchableOpacity onPress={handleButtonPress}>
          <View
            style={[
              styles.button,
              buttonState === 2 && {backgroundColor: '#18191F'},
            ]}>
            <Text
              text={buttonState === 1 ? 'Puan Kazan' : 'Yapıldı'}
              style={[styles.buttonText, buttonState === 2 && {color: 'white'}]}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
