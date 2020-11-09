import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from '@screens';
import homeDrawerNavigator from './homeDrawerNavigator';

const Tab = createBottomTabNavigator();

export default homeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME_SCREEN" component={Screen.HomeScreen} />
      <Tab.Screen name="PROFILE_SCREEN" component={Screen.ProfileScreen} />
    </Tab.Navigator>
  );
};
