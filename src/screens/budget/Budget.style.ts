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
  budgetsTitle: {
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
  flatListContainer: {
    height: 50,
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    width: '100%',
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
    fontWeight: 'bold',
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
    left: 0,
  },
  modalContainer: {
    alignItems: 'center',
  },
  flatListIcon: {
    marginRight: 10,
  },
  flatListText: {
    fontWeight: 'bold',
  },
  containerStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    top: -30,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  selectedCategory: {
    backgroundColor: '#D3D3D3',
    borderColor: '#000',
    borderRadius: 15,
  },
  categoryFlatListContainer: {
    height: 30,
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: '15%',
    alignItems: 'center',
    width: '100%',
  },
});
