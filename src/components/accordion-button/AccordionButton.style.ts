import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        borderRadius: 25,
        paddingHorizontal: 5,
      },
      roundButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFD956',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'black',
        borderWidth:2,
        borderBottomWidth:6,
      },
      buttonText: {
        color: '#fff',
        fontSize: 24,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius:20
      },
      input: {
        height: 40,
        marginLeft: 10,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 50,
      },
      saveButton: {
        backgroundColor: '#18191F',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginLeft:0
      },
      saveButtonText: {
        color: '#fff',
      },
      icon: {
        width: '70%',
        height: '70%',
      },
  });
  