import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  signInContainer: {
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
  warningIcon: {
    width: '10%',
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
});
