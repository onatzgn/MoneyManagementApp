import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
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
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  pointsContainer: {
    alignItems: 'flex-end',
    top: -40,
    left: 90,
  },
  pointsContainer2: {
    alignItems: 'flex-end',
    top: -40,
    left: 20,
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  pointBarStyle: {
    marginLeft: scale(70),
    width: 55,
    height: 22,
    bottom: 15,
    flexDirection: 'row',
    borderWidth: 1.5,
  },
  button: {
    backgroundColor: '#FFBD12',
    width: 70,
    height: 35,
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
