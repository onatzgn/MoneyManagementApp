import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './onBoarding.styles';
import {slides} from '../../utils/onBoarding.slides';
import {useNavigation} from '@react-navigation/native';

export default function OnBoarding() {
  const navigation = useNavigation<any>();
  const onPressSignUp = () => navigation.navigate('SignUp');

  return (
    <View style={styles.viewStyle}>
      <Swiper
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotColor="#B0E3CF"
        activeDotStyle={styles.activeDotStyle}>
        {slides.map(i => {
          return (
            <View style={styles.textContainer}>
              <Text style={styles.title}>{i.title}</Text>
              <Image source={i.image} />
              <Text style={styles.context}>{i.context}</Text>
            </View>
          );
        })}
      </Swiper>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressSignUp} style={styles.button}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
