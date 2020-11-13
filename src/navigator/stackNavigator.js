import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

import DrawerNavigator from './drawerNavigator';
import {COLORS} from '@resource';
import * as Screen from '@screens';
import * as Components from '@components';

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
      let val = 'Screen';
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
          screenOptions={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTintColor: COLORS.white,
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          {stack('SPLASH_SCREEN', Screen.SplashScreen)}
          {stack('START_SCREEN', Screen.StartScreen)}
          {stack('LOGIN_SCREEN', Screen.LoginScreen)}
          {stack('SIGNUP_SCREEN', Screen.SignupScreen)}

          <Stack.Screen
            name="HOME_SCREEN"
            component={DrawerNavigator}
            options={({navigation, route}) => ({
              headerTitle: 'Home',
              headerTitleAlign: 'center',
              headerShown: false,
              headerLeft: () => (
                <IconButton
                  icon="menu"
                  color={'white'}
                  size={40}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
