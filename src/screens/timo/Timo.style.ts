import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
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
    marginBottom:40
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
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
    top: 16,
    left: 16,
  },
  infoText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 40,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 60,
    marginTop:-25
  },
  button: {
    backgroundColor: '#1947E5',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop:20,
    borderWidth:2,
    borderBottomWidth:6
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold'
  },
  contentText: {
    marginTop: 10,
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
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    marginLeft: 40,
    borderWidth:2,
    borderBottomWidth:6
  },
  selectedOption: {
    backgroundColor: '#B0C4DE',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  successMessage: {
    marginTop: 10,
    fontSize: 16,
    color: '#228B22',
    fontWeight: 'bold',
    marginLeft: 40,
  },
  categoryIconContainer:{
    position:'absolute',
    left:340,
    top:10
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
    marginTop: 10,
    fontSize: 16,
    color: '#ff4d4d', 
    fontWeight: 'bold',
  },
});
