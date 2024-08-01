import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Budget, Savings, Timo, MissionCenter, Profile} from '@screens/Index';
import {StyleSheet, View, Image} from 'react-native';
import {styles} from './BottomTabNavigator.style';
import Icons from '@assets/Icons';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: themeColors.tabBar,
        },
      }}>
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                focused
                  ? {backgroundColor: themeColors.iconContainer}
                  : {backgroundColor: themeColors.tabBar},
              ]}>
              <Image
                source={Icons.budgetTab}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedTintColor : styles.defaultTintColor,
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={Savings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                focused
                  ? {backgroundColor: themeColors.iconContainer}
                  : {backgroundColor: themeColors.tabBar},
              ]}>
              <Image
                source={Icons.moneyBoxTab}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedTintColor : styles.defaultTintColor,
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Timo"
        component={Timo}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.timoIconContainer,
                focused
                  ? styles.focusedBackground
                  : styles.timoDefaultBackground,
              ]}>
              <Image
                source={Icons.crocodileTab}
                resizeMode="contain"
                style={[styles.timoIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MissionCenter"
        component={MissionCenter}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                focused
                  ? {backgroundColor: themeColors.iconContainer}
                  : {backgroundColor: themeColors.tabBar},
              ]}>
              <Image
                source={Icons.missionCenterTab}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedTintColor : styles.defaultTintColor,
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                focused
                  ? {backgroundColor: themeColors.iconContainer}
                  : {backgroundColor: themeColors.tabBar},
              ]}>
              <Image
                source={Icons.profileTab}
                resizeMode="contain"
                style={[
                  styles.icon,
                  focused ? styles.focusedTintColor : styles.defaultTintColor,
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({});

export default Tabs;
