import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { slides } from '@utils/OnBoarding.slides';
import { useNavigation } from '@react-navigation/native';
import TextAnimation from '@components/text-animation/TextAnimation';
import PointBar from '@components/point-bar/PointBar';
import { styles } from './OnBoarding.styles';
import Text from '@components/text/Text';

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
                  <TouchableOpacity style={styles.notificationButton}>
                    <Text text={getButtonText()} style={styles.notificationText}></Text>
                  </TouchableOpacity>
                  <PointBar
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
            <Text text={getBigButtonText()} style={styles.nextText}></Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
