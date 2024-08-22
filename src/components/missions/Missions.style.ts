import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: scale(12),
    marginVertical: verticalScale(5),
    marginHorizontal: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: verticalScale(8),
    borderWidth:2,
    borderBottomWidth:5,
  },
  star: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  description: {
    fontSize: 12,
    color: '#474A57',
  },
  pointsContainer: {
    alignItems: 'flex-end',
    top: verticalScale(-30),
    left: scale(90),
  },
  pointsContainer2: {
    alignItems: 'flex-end',
    top: verticalScale(-30),
    left: scale(18),
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  pointBarStyle: {
    marginLeft: scale(70),
    width: scale(46),
    height: verticalScale(17),
    bottom: verticalScale(12),
    flexDirection: 'row',
    borderWidth: 1.5,
  },
  button: {
    backgroundColor: '#FFBD12',
    width: scale(60),
    height: verticalScale(25),
    borderRadius: 8,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  logoHorizontal: {
    width: scale(32),
    height: verticalScale(46),
    marginRight: 0,
    position: 'absolute',
    right: 0,
  },
});
