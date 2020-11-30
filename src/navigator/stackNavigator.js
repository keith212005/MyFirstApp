import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './drawerNavigator';
import {connect} from 'react-redux';
import {colors} from '@resource';
import * as Screen from '@screens';

const Stack = createStackNavigator();

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

class StackNavigator extends React.Component {
  //  extraProps is an object containing name and component as props
  stack = (extraProps) => (
    <Stack.Screen
      name={extraProps.name}
      component={extraProps.component}
      options={{
        headerShown: false,
      }}
    />
  );

  render() {
    const stack = this.stack;
    return (
      <NavigationContainer>
        {this.props.autoLoginStatus ? (
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerTintColor: colors.white,
              headerTitleStyle: {fontWeight: 'bold'},
            }}>
            {stack({name: 'Splash', component: Screen.Splash})}
            {stack({name: 'DrawerNavigator', component: DrawerNavigator})}
            {stack({name: 'Login', component: Screen.Login})}
            {/*
            {stack({name: 'Start', component: Screen.Start})}

            {stack({name: 'Signup', component: Screen.Signup})}
            */}
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerTintColor: colors.white,
              headerTitleStyle: {fontWeight: 'bold'},
            }}>
            {stack({name: 'Splash', component: Screen.Splash})}
            {stack({name: 'Start', component: Screen.Start})}
            {stack({name: 'Login', component: Screen.Login})}
            {stack({name: 'Signup', component: Screen.Signup})}
            {stack({name: 'DrawerNavigator', component: DrawerNavigator})}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

export default connect(matchStateToProps)(StackNavigator);
