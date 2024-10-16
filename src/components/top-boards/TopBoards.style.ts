import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(13),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  pointBox: {
    flex: 1,
    backgroundColor: '#61E4C5',
    padding: scale(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(8),
  },
  leaderBoardBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#61E4C5',
    padding: 0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(8),
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginTop: verticalScale(5),
  },
  score: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
  },
  pointLogo: {
    width: scale(30),
    height: verticalScale(25),
    marginRight: 5,
  },
  awardLogo: {
    width: scale(30),
    height: verticalScale(35),
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4),
    right: scale(22),
    marginHorizontal: scale(10),
  },
});
