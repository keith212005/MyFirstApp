import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './drawerNavigator';
import {COLORS} from '@resource';
import * as Screen from '@screens';

export default class StackNavigator extends React.Component {
  state = {
    isLoading: true,
    userToken: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    const Stack = createStackNavigator();
    const stack = (name, component, headerShown, headerTitle) => {
      {
        /*============================== PARAMETERS ============================================
        String routename, ScreenObject componentname, (boolean) showheader, String headerTitle
        {stack('SPLASH_SCREEN', Screen.SplashScreen, true, 'title')}
        */
      }
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

    if (this.state.isLoading) {
      return <Screen.SplashScreen />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="START_SCREEN"
          screenOptions={{
            headerTintColor: COLORS.white,
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          {this.state.userToken == null ? (
            <>
              {stack('START_SCREEN', Screen.StartScreen)}
              {stack('LOGIN_SCREEN', Screen.LoginScreen)}
              {stack('SIGNUP_SCREEN', Screen.SignupScreen)}
              {stack('HOME_SCREEN', DrawerNavigator)}
            </>
          ) : (
            <>{stack('HOME_SCREEN', DrawerNavigator)}</>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
