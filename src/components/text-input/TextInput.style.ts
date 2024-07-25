import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
    marginVertical: '2%',
    fontFamily: 'Open Sans',
  },
  icon: {
    position: 'absolute',
    left: '13%',
    top: '34%',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  errorIcon: {
    width: '10%',
    position: 'absolute',
    bottom: -45,
    right: 10,
  },
});
