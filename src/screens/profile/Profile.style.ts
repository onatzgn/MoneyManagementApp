import {StyleSheet} from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  profileContainer: {
    width: '100%',
    height: verticalScale(400),
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    position: 'absolute',
  },
  mainContainer: {
    flex: 1,
  },
  parentIntro: {},
  profileNav: {
    flexDirection: 'row',
    height: verticalScale(100),
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  parentUpdate: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
    borderBottomWidth: 5,
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullName: {
    height: 50,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  icon: {
    padding: 7,
    borderRadius: 40,
  },
  avatar: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  title: {
    fontSize: 30,
    marginTop: verticalScale(40),
    fontWeight: 'bold',
    marginLeft: verticalScale(20),
  },

  menuContainer: {
    width: '80%',
    marginTop: verticalScale(430),
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
  },
  item: {
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCircle: {
    width: scale(20),
    height: verticalScale(20),
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: verticalScale(20),
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    padding: 10,
  },
  buttonClose: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  modalText: {
    textAlign: 'center',
    justifyContent: 'center',
    top: 5,
  },
});
