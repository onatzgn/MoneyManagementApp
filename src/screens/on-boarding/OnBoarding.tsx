import React, {useEffect, useRef, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {slides} from './components/OnBoarding.slides';
import {useNavigation} from '@react-navigation/native';
import {styles} from './OnBoarding.styles';
import Images from '@assets/Images';
import {TextAnimation, PointBar, Text} from 'components/Index';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState, useAppDispatch} from '@redux/Store';
import {setOnboardingSeen} from '@redux/actions/UserAction';

export default function OnBoarding() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const swiperRef = useRef<Swiper>(null);
  const onPressSignUp = () => navigation.navigate('SignUp');
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstMessageCompleted, setFirstMessageCompleted] = useState(false);
  const [secondMessageCompleted, setSecondMessageCompleted] = useState(false);

  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  useEffect(() => {
    dispatch(setOnboardingSeen());
  }, [dispatch]);

  const onPressNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
      setSlideIndex(slideIndex + 1);

      setFirstMessageCompleted(false);
      setSecondMessageCompleted(false);
    }
  };

  const getButtonText = () => {
    return slides[slideIndex]?.button ?? '';
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

  const renderSlide = () => {
    return slides?.map((slide, index) => (
      <View key={slide?.id}>
        {index === slideIndex && (
          <TextAnimation
            text={slide.text1 ? [slide.text1] : []}
            onComplete={() => setFirstMessageCompleted(true)}
          />
        )}
        {firstMessageCompleted && (
          <TextAnimation
            text={slide?.text2 ? [slide.text2] : []}
            onComplete={() => setSecondMessageCompleted(true)}
          />
        )}
        {secondMessageCompleted && getButtonText() && (
          <View>
            <TouchableOpacity style={styles.notificationButton}>
              <Text
                text={getButtonText()}
                style={styles.notificationText}></Text>
            </TouchableOpacity>
            <PointBar text="200" containerStyle={styles.pointBarStyle} />
          </View>
        )}
      </View>
    ));
  };

  return (
    <View
      style={[
        styles.viewStyle,
        {backgroundColor: themeColors.onBoardingBackground},
      ]}>
      <View style={styles.logoWrapper}>
        <Image
          source={Images.timoLogo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View
        style={[
          styles.newContainer,
          {backgroundColor: themeColors.onBoardingContainer},
        ]}>
        <View>
          <Image
            source={Images.timoChatIcon}
            style={styles.timoIcon}
            resizeMode="contain"
          />
        </View>
        <Swiper
          ref={swiperRef}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          loop={false}
          scrollEnabled={false}>
          {renderSlide()}
        </Swiper>
      </View>
      <View style={styles.buttonContainer}>
        {secondMessageCompleted && (
          <TouchableOpacity
            onPress={handleBigButtonPress}
            style={styles.button}>
            <Text text={getBigButtonText()} style={styles.nextText}></Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.skipButton}>
        <TouchableOpacity onPress={onPressSignUp}>
          <Text
            text="Atla"
            style={[
              styles.skipText,
              {color: themeColors.onBoardingSkip},
            ]}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
