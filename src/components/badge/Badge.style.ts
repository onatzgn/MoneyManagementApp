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
    marginRight: 0,
    position: 'absolute',
    right: 0,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeBackground:{
    width: 33,
    height: 33,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor:'#FFE8E8',
    zIndex:1,
    position:'absolute',
    bottom:10,
    right:-8,
    borderWidth:2
  },
  starIcon: {
    width: 20,
    height: 20,
    zIndex:2,
    bottom:6.5,
    left:1.5
  },
  badgeText: {
    marginTop:8, 
    fontSize: 10, 
    fontWeight: 'bold', 
    color: 'white', 
    textAlign: 'center', 
    marginRight:5,
  },
});
