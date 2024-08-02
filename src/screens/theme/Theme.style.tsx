import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    marginTop: verticalScale(100),
    width: '100%',
    alignItems: 'center',
  },
});
