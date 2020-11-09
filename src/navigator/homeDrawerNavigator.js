import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screen from '@screens';
import homeTabNavigator from './homeTabNavigator';

const Drawer = createDrawerNavigator();

export default homeDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HOME" component={homeTabNavigator} />
      <Drawer.Screen name="SETTING_SCREEN" component={Screen.SettingScreen} />
    </Drawer.Navigator>
  );
};
