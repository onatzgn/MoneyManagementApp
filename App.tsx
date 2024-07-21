import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Animated } from "react-native";

//WARN: Sending `onAnimatedValueUpdate` with no listeners registered 
const av = new Animated.Value(0);
av.addListener(() => {return});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StackNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
