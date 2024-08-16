import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Text, Container, PointBarHorizontal, Badge} from '@components';
import {styles} from './Missions.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Images from '@assets/Images';

interface MissionProps {
  name: string;
  description: string;
  badgeColor: string;
  point: number;
}

export const Missions = ({
  name,
  description,
  badgeColor,
  point,
}: MissionProps) => {
  const [buttonState, setButtonState] = useState(1);

  const handleButtonPress = () => {
    if (buttonState === 1) {
      setButtonState(2);
    }
  };
  return (
    <View style={styles.container}>
      <Badge backgroundColor={badgeColor} textVisible={false}></Badge>
      <View style={styles.textContainer}>
        <Text text={name} style={styles.name}></Text>
        <Text text={description} style={styles.description}></Text>
      </View>
      {buttonState === 0 ? (
        <View style={styles.pointsContainer2}>
          <PointBarHorizontal
            text={point.toString()}
            containerStyle={styles.pointBarStyle}
          />
        </View>
      ) : (
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
