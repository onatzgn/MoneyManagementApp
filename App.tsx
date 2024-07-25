import 'react-native-gesture-handler';
import React from 'react';
import {View, Animated} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from '@redux/Store';
import StackNavigator from '@navigations/StackNavigator';

//WARN: Sending `onAnimatedValueUpdate` with no listeners registered
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <StackNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
