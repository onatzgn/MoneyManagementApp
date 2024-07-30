import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    width: '50%',
    position: 'relative',
    marginLeft: '30%',
    marginTop: '10%',
    margin: moderateScale(-30),
  },
  text: {
    alignSelf: 'auto',
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
  },
});
