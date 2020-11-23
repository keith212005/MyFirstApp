import React from 'react';
import {Text} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '@resource';
import * as Screen from '@screens';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  tabs = (extraProps) => {
    return (
      <Tab.Screen name={extraProps.name} component={extraProps.component} />
    );
  };
  render() {
    const tabs = this.tabs;

    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.white}
        backBehavior="initialRoute"
        labeled={true}
        barStyle={{backgroundColor: colors.primary}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Tab 3') {
              iconName = focused ? 'barchart' : 'barchart';
            } else if (route.name === 'Tab 4') {
              iconName = focused ? 'piechart' : 'piechart';
            } else if (route.name === 'Tab 5') {
              iconName = focused ? 'dotchart' : 'dotchart';
            }
            return <AntDesign name={iconName} size={20} color={color} />;
          },
        })}>
        {tabs({name: 'Home', component: Screen.Home})}
        {tabs({name: 'Profile', component: Screen.Profile})}
        {tabs({name: 'Tab 3', component: Screen.Tab3})}
        {tabs({name: 'Tab 4', component: Screen.Tab4})}
        {tabs({name: 'Tab 5', component: Screen.Tab5})}
      </Tab.Navigator>
    );
  }
}
