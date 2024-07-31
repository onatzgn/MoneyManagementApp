import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    elevation: 0,
    height: verticalScale(75),
    paddingHorizontal: scale(10),
    borderTopWidth: 0,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(35),
    height: scale(35),
    borderRadius: moderateScale(12),
  },
  timoIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(25),
    borderWidth: 2,
    borderBottomWidth: 5,
  },
  icon: {
    width: '50%',
    height: '50%',
  },
  timoIcon: {
    width: scale(25),
    height: scale(25),
  },
  focusedBackground: {
    backgroundColor: '#CEF4E5',
  },
  timoDefaultBackground: {
    backgroundColor: '#30444E',
  },
  focusedTintColor: {
    tintColor: '#3DD598',
  },
  defaultTintColor: {
    tintColor: '#8696BB',
  },
});
