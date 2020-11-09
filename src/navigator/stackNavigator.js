import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as Screen from '@screens';
import homeTabNavigator from './homeTabNavigator';
import homeDrawerNavigator from './homeDrawerNavigator';

const AuthStack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SPLASH_SCREEN"
          component={Screen.SplashScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="START_SCREEN"
          component={Screen.StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="LOGIN_SCREEN"
          component={Screen.LoginScreen}
          options={{title: 'Sign In'}}
        />
        <AuthStack.Screen
          name="SIGNUP_SCREEN"
          component={Screen.SignupScreen}
          options={{title: 'Sign Up', headerShown: false}}
        />
        <AuthStack.Screen name="HOME" component={homeDrawerNavigator} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
