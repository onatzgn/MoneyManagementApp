import {StyleSheet} from 'react-native';
import {Badge} from 'react-native-paper';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: verticalScale(40),
    fontWeight: 'bold',
    marginLeft: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  subTitle: {
    fontSize: 25,
    marginTop: verticalScale(40),
    fontWeight: 'bold',
    marginLeft: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  badgeContainer: {
    borderWidth: 12,
    borderColor: '#543417',
    backgroundColor: '#299657',
    shadowColor: 'black',
  },
  badgeCollection: {
    flexDirection: 'row',
    marginHorizontal: 0,
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: verticalScale(80),
  },
  containerView: {
    marginBottom: verticalScale(-20),
  },
  badgeText: {
    top: verticalScale(-25),
    fontSize: 22,
    left: scale(10),
    fontWeight: 'bold',
    color: 'white',
  },
});
