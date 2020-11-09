import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screen from '@screens';
import homeTabNavigator from './homeTabNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

export default homeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#009387',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="HOME"
        component={homeTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <FontAwesome
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SETTING_SCREEN"
        component={Screen.SettingScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Feather
              name="settings"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
