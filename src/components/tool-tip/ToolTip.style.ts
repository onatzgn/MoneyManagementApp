import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  toolTipContainer: {
    width: '80%',
    height: '50%',
    alignSelf: 'center',
    position: 'absolute',
    top: -30,
  },
  visibleContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,

    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  arrowDown: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    position: 'absolute',
    right: 15,
    bottom: -10,
    alignSelf: 'center',
  },
  toolTipText: {
    textAlign: 'center',
  },
});
