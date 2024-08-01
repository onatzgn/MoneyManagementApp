import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

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
  budgetsTitle:{
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: verticalScale(20),
    marginBottom: verticalScale(10),

  },
  staticTitle: {
    marginLeft: verticalScale(20),
    fontWeight: 'bold',

  },
  budgetTitle: {
    left: '50%',
    fontSize: 17,
    fontWeight: 'bold',
  },
  contentContainer: {
    borderWidth: 3,
    borderColor: 'black',
    borderBottomWidth: 5,
    marginVertical: '10%',
    width: '90%',
    paddingVertical: verticalScale(40),
    paddingHorizontal: verticalScale(10),
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
  },
  flatListItem: {
    height: 50,
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  iconContainer: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    padding: 5,
    marginRight: 10,
  },
  spendText: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  spendTextContainer: {
    position: 'absolute',
    right: 20,
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
    top: 5,
    left: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    marginRight: 10,
  },

});
