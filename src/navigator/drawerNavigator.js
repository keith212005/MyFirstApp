import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './tabNavigator';
import {SettingScreen} from '@screens';
import {DrawerContent} from '@components';
import {COLORS} from '@resource';

export default class DrawerNavigator extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HOME_SCREEN" component={TabNavigator} />
        <Drawer.Screen name="SETTING_SCREEN" component={SettingScreen} />
      </Drawer.Navigator>
    );
  }
}
