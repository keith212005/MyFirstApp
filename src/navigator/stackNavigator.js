import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as Screen from '@screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SPLASH_SCREEN"
          component={Screen.SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="START_SCREEN"
          component={Screen.StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LOGIN_SCREEN"
          component={Screen.LoginScreen}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name="SIGNUP_SCREEN"
          component={Screen.SignupScreen}
          options={{title: 'Sign Up', headerShown: false}}
        />
        <Stack.Screen
          name="HOME_SCREEN"
          component={Screen.HomeScreen}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
