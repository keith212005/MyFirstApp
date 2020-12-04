import React from 'react';
import {Image} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors, getImageName} from '@resource';
import * as Screen from '@screens';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  tabs = (name) => {
    let screenName = Screen[name];
    return <Tab.Screen name={name} component={screenName} />;
  };
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.white}
        backBehavior="initialRoute"
        labeled={true}
        barStyle={{backgroundColor: colors.primary}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <AntDesign
                name={getImageName[route.name]}
                size={20}
                color={color}
              />
            );
          },
        })}>
        {this.tabs('Home')}
        {this.tabs('Profile')}
        {this.tabs('Tab3')}
        {this.tabs('Tab4')}
        {this.tabs('Tab5')}
      </Tab.Navigator>
    );
  }
}
