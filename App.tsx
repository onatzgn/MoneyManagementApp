import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StackNavigator />
    </View>
  );
};

export default App;
