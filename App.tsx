import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StackNavigator />
      </View>
    </Provider>
  );
};

export default App;
