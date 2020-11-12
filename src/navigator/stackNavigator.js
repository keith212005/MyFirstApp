import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {Button, IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import * as Screen from '@screens';
import TabNavigator from './tabNavigator';
import DrawerNavigator from './drawerNavigator';

export default class StackNavigator extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#1f65ff'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
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
            options={{title: 'Sign In', headerShown: false}}
          />
          <Stack.Screen
            name="SIGNUP_SCREEN"
            component={Screen.SignupScreen}
            options={{title: 'Sign Up', headerShown: false}}
          />
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
