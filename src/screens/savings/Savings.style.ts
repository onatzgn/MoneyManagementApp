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
    right: 25,
    borderRadius: 25,
    borderBottomWidth: 4,
  },
  modalContainer: {
    padding: 20,
    marginTop: 220,
  },
  modalInput: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  flatListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flatListIcon: {
    marginRight: 10,
  },
  flatListText: {
    fontSize: 16,
    flex: 1,
  },
  spendTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spendText: {
    fontSize: 14,
    marginRight: 10,
  },
});
