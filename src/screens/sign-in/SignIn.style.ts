import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    fontFamily: 'Open Sans',
  },
  rememberMeText: {
    alignSelf: 'center',
  },
  signUpButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,
    textAlign: 'center',
    width: '100%'
  },
  rememberMeSwitchContainer: {
    flexDirection: 'row',
  },
});
