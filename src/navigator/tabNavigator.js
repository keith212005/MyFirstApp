import React from 'react';

import {DrawerActions} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS} from '@resource';
import * as Screen from '@screens';

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HOME_SCREEN"
        activeColor={COLORS.white}
        backBehavior="initialRoute">
        {tabs('HOME_SCREEN', Screen.HomeScreen, 'Home', 'home')}
        {tabs('PROFILE_SCREEN', Screen.ProfileScreen, 'Profile', 'user')}
        {tabs('TAB3_SCREEN', Screen.Tab3Screen, 'Tab 3', 'barchart')}
        {tabs('TAB4_SCREEN', Screen.Tab4Screen, 'Tab 4', 'piechart')}
        {tabs('TAB5_SCREEN', Screen.Tab5Screen, 'Tab 5', 'dotchart')}
      </Tab.Navigator>
    );
  }
}

const Tab = createMaterialBottomTabNavigator();
const tabs = (name, component, tabLabel, tabIconName) => {
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
            color={color}
          />
        ),
      }}
    />
  );
};
