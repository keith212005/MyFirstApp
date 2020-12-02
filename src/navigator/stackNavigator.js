import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawerNavigator';

import {colors} from '@resource';
import * as Screen from '@screens';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  //  extraProps is an object containing name and component as props
  stack = ({name}) => {
    let screenName =
      name === 'DrawerNavigator' ? DrawerNavigator : Screen[name];

    return (
      <Stack.Screen
        name={name}
        component={screenName}
        options={{
          headerShown: false,
        }}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {this.stack({name: 'Splash'})}
          {this.stack({name: 'Start'})}
          {this.stack({name: 'Login'})}
          {this.stack({name: 'Signup'})}
          {this.stack({name: 'DrawerNavigator'})}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
