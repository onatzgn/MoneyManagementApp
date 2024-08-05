import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    borderBottomWidth: 6,
    width: '100%',
    height: verticalScale(150),
    paddingVertical: verticalScale(45),
    paddingHorizontal: verticalScale(10),
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#D6FCF7',
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
    top: verticalScale(10),
    marginVertical: verticalScale(-20),
    marginBottom: scale(10),
  },
  deleteButton: {
    position: 'absolute',
    top: verticalScale(10),
    left: scale(240),
    width: 35,
    height: 20,
    borderRadius: 50,
  },
  deleteText: {
    fontWeight: '600',
    fontSize: 30,
    color: '#18191F',
    textAlign: 'center',
    marginTop: -14,
  },
  progressBar: {
    left: scale(10),
    top: verticalScale(0),
  },
});
