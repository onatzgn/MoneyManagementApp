import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scale,
  moderateScale,
  s,
} from 'react-native-size-matters';

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
    height: verticalScale(40),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    width: '100%',
  },
  spendText: {
    marginLeft: scale(10),
    fontWeight: 'bold',
  },
  spendTextContainer: {
    position: 'absolute',
    right: scale(20),
  },
  button: {
    padding: scale(10),
  },
  buttonClose: {
    position: 'absolute',
    right: scale(5),
    top: verticalScale(5),
  },
  modalText: {
    top: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  modalContainer: {
    alignItems: 'center',
  },
  flatListIcon: {
    marginRight: scale(10),
  },
  flatListText: {
    fontWeight: 'bold',
  },
  categoryItem: {
    padding: scale(10),
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
    height: verticalScale(20),
    marginBottom: verticalScale(5),
    flexDirection: 'row',
    paddingHorizontal: '15%',
    alignItems: 'center',
    width: '100%',
  },
  graphicStyle: {
    position: 'absolute',
    top: '35%',
    left: '10%',
    width: verticalScale(60),
    height: verticalScale(60),
    borderRadius: 40,
    backgroundColor: 'white',
  },
  spendFlatList: {
    marginTop: verticalScale(-25),
    marginBottom: verticalScale(-30),
  },
  spendListView: {
    padding: verticalScale(10),
    marginBottom: verticalScale(15),
  },
  spendListText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryView: {
    paddingVertical: verticalScale(70),
    height: verticalScale(330),
    marginTop: verticalScale(-50),
    width: scale(210),
  },
  modalButton: {
    marginTop: verticalScale(-60),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: verticalScale(80),
  },
  touchableViewUp: {
    borderWidth: 1,
    position: 'absolute',
    right: scale(20),
    borderRadius: 25,
    borderBottomWidth: 4,
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableViewDown: {
    borderWidth: 1,
    position: 'absolute',
    right: scale(70),
    borderRadius: 25,
    borderBottomWidth: 4,
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  containerStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    top: -30,
  },
});
