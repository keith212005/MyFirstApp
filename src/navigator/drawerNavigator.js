import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {Setting} from '@screens';
import TabNavigator from './tabNavigator';
import {DrawerContent} from '@components';

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
