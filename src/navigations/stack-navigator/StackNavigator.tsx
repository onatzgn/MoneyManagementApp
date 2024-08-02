import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '@screens/on-boarding/OnBoarding';
import SignUp from '@screens/sign-up/SignUp';
import SignIn from '@screens/sign-in/SignIn';
import Tabs from '@navigations/bottom-tab-navigator/BottomTabNavigator';
import {PersonalInformation} from '@screens/personal-information/PersonaInformation';
import {Theme} from '@screens/theme/Theme';
import {RootState} from '@redux/Store';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.persistedReducer.user.isLoggedIn,
  );
  const onboardingSeen = useSelector(
    (state: RootState) => state.persistedReducer.user.hasSeenOnboarding,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          onboardingSeen ? (isLoggedIn ? 'Budget' : 'SignIn') : 'OnBoarding'
        }>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Theme"
          component={Theme}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
