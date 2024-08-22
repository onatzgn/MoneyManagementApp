import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoHorizontal: {
    width: scale(32),
    height: verticalScale(46),
    position: 'absolute',
    right: scale(-0.5),
  },
  badge: {
    width: scale(33.5),
    height: scale(34),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeBackground: {
    width: scale(28),
    height: scale(28),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
    backgroundColor: '#FFE8E8',
    zIndex: 1,
    position: 'absolute',
    bottom: verticalScale(7.2),
    right: scale(-6.7),
    borderWidth: 2,
  },
  starIcon: {
    width: scale(20),
    height: scale(17),
    zIndex: 2,
    bottom: scale(6),
    left: scale(1.7),
  },
  badgeText: {
    marginTop: verticalScale(6),
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginRight: scale(5),
  },
});
