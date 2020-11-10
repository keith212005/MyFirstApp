import React from 'react';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import * as Screen from '@screens';
import homeTabNavigator from './homeTabNavigator';
import homeDrawerNavigator from './homeDrawerNavigator';
import {Button, IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const AuthStack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#1f65ff'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
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
          options={{title: 'Sign In', headerShown: false}}
        />
        <AuthStack.Screen
          name="SIGNUP_SCREEN"
          component={Screen.SignupScreen}
          options={{title: 'Sign Up', headerShown: false}}
        />
        <AuthStack.Screen
          name="HOME_SCREEN"
          component={homeDrawerNavigator}
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
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
