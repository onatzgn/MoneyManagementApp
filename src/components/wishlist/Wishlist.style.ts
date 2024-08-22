import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: verticalScale(15),
    width: '100%',
    height: verticalScale(150),
    paddingVertical: verticalScale(45),
    paddingHorizontal: verticalScale(10),
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    position: 'relative',
    marginBottom: verticalScale(5),
  },
  title: {
    fontSize: 25,
    color: 'black',
    position: 'absolute',
    fontWeight: '800',
    left: scale(20),
    top: verticalScale(20),
  },
  content: {
    left: scale(10),
    fontWeight: '600',
    marginVertical: verticalScale(3),
    color: '#474A57',
  },
  progressContent: {
    fontWeight: 'bold',
    color: '#474A57',
    fontSize: 25,
    left: scale(7),
    top: verticalScale(4),
  },
  subContent: {
    left: scale(22),
    fontWeight: '400',
    position: 'absolute',
    marginVertical: verticalScale(130),
    fontSize: 10,
  },
  totalAmount: {
    position: 'absolute',
    top: verticalScale(50),
    left: scale(220),
    color: '#21F46A',
    fontWeight: 'bold',
  },
  moneyButton: {
    left: scale(215),
    marginVertical: verticalScale(-20),
    marginBottom: scale(10),
  },
  deleteButton: {
    position: 'absolute',
    top: verticalScale(12),
    left: scale(260),
    width: scale(35),
    height: verticalScale(20),
    borderRadius: 50,
  },
  progressBar: {
    left: scale(10),
    top: verticalScale(0),
  },
  deleteIcon: {
    width: scale(15),
    height: verticalScale(30),
  },
});
