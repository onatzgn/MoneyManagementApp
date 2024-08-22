import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: scale(16),
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
    fontSize: 20,
    marginBottom: verticalScale(30),
  },
  postContainer: {
    marginVertical: '2%',
    width: '90%',
    paddingVertical: verticalScale(40),
    paddingBottom: verticalScale(15),
    paddingHorizontal: verticalScale(10),
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoCard: {
    backgroundColor: '#B0E3CF',
  },
  contentCard: {
    backgroundColor: '#90BEFF',
  },
  quizCard: {
    backgroundColor: '#FCB351',
  },
  iconContainer: {
    position: 'absolute',
    top: verticalScale(13),
    left: scale(13),
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: scale(45),
    marginTop: verticalScale(-20),
  },
  button: {
    backgroundColor: '#1947E5',
    borderRadius: 15,
    padding: verticalScale(12),
    alignItems: 'center',
    marginTop: verticalScale(20),
    borderWidth: 2,
    borderBottomWidth: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    marginTop: verticalScale(10),
    fontSize: 16,
    color: '#000',
  },
  timoIcon: {
    width: scale(35),
    height: verticalScale(35),
    position: 'absolute',
    top: verticalScale(0),
    right: scale(-35),
  },
  quizOption: {
    backgroundColor: '#E0E0E0',
    padding: verticalScale(8),
    marginVertical: verticalScale(4),
    borderRadius: 15,
    marginLeft: scale(35),
    borderWidth: 2,
    borderBottomWidth: 6,
  },
  selectedOption: {
    backgroundColor: '#B0C4DE',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  successMessage: {
    marginTop: verticalScale(10),
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: scale(40),
  },
  categoryIconContainer: {
    position: 'absolute',
    left: scale(290),
    top: verticalScale(10),
  },
  wrongOption: {
    backgroundColor: '#ffe6e6',
    borderColor: '#ff4d4d',
  },
  correctOption: {
    backgroundColor: '#e6ffed',
    borderColor: '#2ecc71',
  },
  errorMessage: {
    marginTop: verticalScale(10),
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: verticalScale(80),
  },
});
