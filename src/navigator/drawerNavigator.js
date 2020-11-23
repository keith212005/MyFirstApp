import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './tabNavigator';
import {Setting} from '@screens';
import {DrawerContent} from '@components';
import {colors} from '@resource';

const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    );
  }
}
