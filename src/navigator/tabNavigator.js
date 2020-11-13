import React from 'react';

import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {IconButton} from 'react-native-paper';

import * as Screen from '@screens';
import {COLORS} from '@resource';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="HOME" activeColor={COLORS.white}>
        <Tab.Screen
          name="HOME_SCREEN"
          component={Screen.HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: COLORS.primary,
            tabBarIcon: ({focused, color, size}) => (
              <IonIcon name="home-outline" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="PROFILE_SCREEN"
          component={Screen.ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#215fe6',
            tabBarIcon: ({focused, color, size}) => (
              <AntDesign name="user" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="TAB3_SCREEN"
          component={Screen.Tab3Screen}
          options={{
            tabBarLabel: 'Tab 3',
            tabBarColor: '#694fad',
            tabBarIcon: ({focused, color, size}) => (
              <IonIcon name="bar-chart-outline" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="TAB4_SCREEN"
          component={Screen.Tab4Screen}
          options={{
            tabBarLabel: 'Tab 4',
            tabBarColor: '#d02860',
            tabBarIcon: ({focused, color, size}) => (
              <IonIcon name="pie-chart-outline" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="TAB5_SCREEN"
          component={Screen.Tab5Screen}
          options={{
            tabBarLabel: 'Tab 5',
            tabBarColor: '#d09000',
            tabBarIcon: ({focused, color, size}) => (
              <IonIcon name="bar-chart" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
