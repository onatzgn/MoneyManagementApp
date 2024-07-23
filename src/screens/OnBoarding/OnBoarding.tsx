import React, { useRef, useState } from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './onBoarding.styles';
import {slides} from '../../utils/onBoarding.slides';
import {useNavigation} from '@react-navigation/native';
import TextAnimation from '../../components/TextAnimation/TextAnimation';
import GenericPointBar from '../../components/GenericPointBar/GenericPointBar';

export default function OnBoarding() {
  const navigation = useNavigation<any>();
  const swiperRef = useRef<Swiper>(null);
  const onPressSignUp = () => navigation.navigate('SignUp');
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstMessageCompleted, setFirstMessageCompleted] = useState(false);
  const [secondMessageCompleted, setSecondMessageCompleted] = useState(false);

  const onPressNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
      setSlideIndex(slideIndex + 1);

      setFirstMessageCompleted(false);
      setSecondMessageCompleted(false);
    }
  };

  const getButtonText = () => {
    return slides[slideIndex]?.button || ''; 
  };

  const getBigButtonText = () => {
    if (slideIndex >= 2) {
      return 'Başlayalım';
    }
    return 'Devam';
  };
  
  const handleBigButtonPress = () => {
    if (slideIndex >= 2) {
      onPressSignUp();
    } else {
      onPressNext();
    }
  };

  return (
    <View style={styles.viewStyle}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/Animations/timoLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.newContainer}>
      <View >
        <Image
         source={require('../../assets/Animations/timoProfileIcon.png')}
         style={styles.timoIcon}
         resizeMode="contain"
        />
      </View>
        <Swiper
          ref={swiperRef}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotColor="#B0E3CF"
          activeDotStyle={styles.activeDotStyle}
          loop={false}
          scrollEnabled={false}
        >
          {slides.map((slide, index) => (
            <View key={slide.id}>
              {index === slideIndex && (
                <TextAnimation
                  text={slide.text1 ? [slide.text1] : []}
                  onComplete={() => setFirstMessageCompleted(true)}
                />
              )}
              {firstMessageCompleted && (
                <TextAnimation
                  text={slide.text2 ? [slide.text2] : []}
                  onComplete={() => setSecondMessageCompleted(true)}
                />
              )}
              {secondMessageCompleted && getButtonText() && (
                <View>
                <TouchableOpacity style = {styles.notificationButton}>
                  <Text style = {styles.notificationText}>{getButtonText()}</Text>
                </TouchableOpacity>
                <GenericPointBar
                  text="200"
                  containerStyle={{ marginLeft: 85 }}
                />
                </View>
              )}
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.buttonContainer}>
        {secondMessageCompleted && (
        <TouchableOpacity onPress={handleBigButtonPress} style={styles.button}>
          <Text style={styles.nextText}>{getBigButtonText()}</Text>
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
