import {StyleSheet} from 'react-native';
import {s, scale, verticalScale} from 'react-native-size-matters';

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
  staticTitle: {
    marginLeft: verticalScale(20),
    fontWeight: 'bold',
  },
  budgetsTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  scrollContainer: {
    flexGrow: 1,
  },
  addButton: {
    borderWidth: 1,
    position: 'absolute',
    right: scale(20),
    borderRadius: 25,
    borderBottomWidth: 4,
  },
  modalContainer: {
    width: '80%',
    padding: verticalScale(20),
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalInput: {
    borderWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 15,
    padding: scale(10),
    marginVertical: verticalScale(5),
    width: scale(170),
    alignSelf: 'center',
  },
  flatListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flatListIcon: {
    marginRight: scale(10),
  },
  flatListText: {
    fontSize: 16,
    flex: 1,
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    padding: scale(10),
    borderRadius: 15,
    marginVertical: verticalScale(5),
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 5,
    width: scale(170),
    alignSelf: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateStyle: {
    marginRight: scale(80),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
    alignSelf: 'center',
  },
  emptyWishlistText: {
    textAlign: 'center',
  },
  wishlistMap: {
    marginTop: verticalScale(-15),
    marginBottom: verticalScale(-30),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: verticalScale(80),
  },
  dreamBoxText: {
    marginTop: verticalScale(-20),
    marginBottom: verticalScale(20),
    fontSize: 20,
    fontWeight: 'bold',
    left: scale(5),
  },
  worldBoxText: {
    marginTop: verticalScale(-25),
    marginBottom: verticalScale(15),
    fontSize: 20,
    fontWeight: 'bold',
    left: scale(5),
  },
  worldBoxInfo: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(-20),
    fontSize: 12,
  },
});
