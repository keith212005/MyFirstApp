import React from 'react';

import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {IconButton} from 'react-native-paper';

import * as Screen from '@screens';
import {COLORS} from '@resource';

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HOME_SCREEN"
        activeColor={COLORS.white}
        backBehavior="initialRoute">
        {tabs('HOME_SCREEN', Screen.HomeScreen, 'Home', 'home', COLORS.white)}
        {tabs(
          'PROFILE_SCREEN',
          Screen.ProfileScreen,
          'Profile',
          'user',
          COLORS.white,
        )}
        {tabs(
          'TAB3_SCREEN',
          Screen.Tab3Screen,
          'Tab 3',
          'barchart',
          COLORS.white,
        )}

        {tabs(
          'TAB4_SCREEN',
          Screen.Tab4Screen,
          'Tab 4',
          'piechart',
          COLORS.white,
        )}

        {tabs(
          'TAB5_SCREEN',
          Screen.Tab5Screen,
          'Tab 5',
          'dotchart',
          COLORS.white,
        )}
      </Tab.Navigator>
    );
  }
}

const Tab = createMaterialBottomTabNavigator();
const tabs = (name, component, tabLabel, tabIconName, iconColor) => {
  return (
    <Tab.Screen
      name={name}
      component={component}
      options={{
        tabBarLabel: tabLabel ? tabLabel : null,
        tabBarColor: COLORS.primary,
        tabBarIcon: ({focused, color, size}) => (
          <AntDesign
            name={tabIconName ? tabIconName : 'question'}
            size={26}
            color={iconColor ? iconColor : COLORS.black}
          />
        ),
      }}
    />
  );
};
