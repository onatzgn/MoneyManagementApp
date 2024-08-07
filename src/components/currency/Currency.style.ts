import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: verticalScale(120),
    paddingVertical: verticalScale(45),
    paddingHorizontal: verticalScale(10),
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#FFBD12',
    position: 'relative',
    marginBottom: verticalScale(5),
    marginEnd: scale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: 25,
    position: 'absolute',
    fontWeight: '800',
    left: scale(20),
    top: verticalScale(20),
    color: 'white',
  },
  content: {
    left: scale(10),
    fontWeight: '700',
    marginVertical: verticalScale(-10),
    color: 'white',
    fontSize: 50,
  },
  moneyButton: {
    left: scale(75),
    marginVertical: verticalScale(-35),
    marginBottom: scale(10),
  },
  progressBar: {
    left: scale(10),
    top: verticalScale(0),
  },
});
