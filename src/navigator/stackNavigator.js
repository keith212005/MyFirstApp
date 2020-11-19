import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './drawerNavigator';
import {COLORS} from '@resource';
import * as Screen from '@screens';

export default class StackNavigator extends React.Component {
  render() {
    const Stack = createStackNavigator();
    {
      /*
      ============================== PARAMETERS ============================================
      String routename, ScreenObject componentname, (boolean) showheader, String headerTitle
      {stack('SPLASH_SCREEN', Screen.SplashScreen, true, 'title')}
      ======================================================================================
      */
    }
    const stack = (name, component, headerShown, headerTitle) => {
      return (
        <Stack.Screen
          name={name}
          component={component}
          options={{
            headerTitle: headerTitle ? headerTitle : null,
            headerShown: headerShown === true ? true : false,
          }}
        />
      );
    };

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SPLASH_SCREEN"
          screenOptions={{
            headerTintColor: COLORS.white,
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          {stack('SPLASH_SCREEN', Screen.SplashScreen)}
          {stack('START_SCREEN', Screen.StartScreen)}
          {stack('LOGIN_SCREEN', Screen.LoginScreen)}
          {stack('SIGNUP_SCREEN', Screen.SignupScreen)}
          {stack('HOME_SCREEN', DrawerNavigator)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
