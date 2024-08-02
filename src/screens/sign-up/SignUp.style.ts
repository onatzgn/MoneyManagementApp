import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
});

export default styles;
