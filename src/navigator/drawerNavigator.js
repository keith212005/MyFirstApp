import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import TabNavigator from './tabNavigator';
import * as Screen from '@screens';
import {DrawerContent} from '@components';
import {COLORS} from '@resource';

export default class DrawerNavigator extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HOME_SCREEN" component={TabNavigator} />
        <Drawer.Screen name="SETTING_SCREEN" component={Screen.SettingScreen} />
      </Drawer.Navigator>
    );
  }
}
