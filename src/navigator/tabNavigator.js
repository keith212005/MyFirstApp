import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors, getImageName} from '@resource';
import * as Screen from '@screens';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  tabs = ({name}) => {
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
        {this.tabs({name: 'Home'})}
        {this.tabs({name: 'Profile'})}
        {this.tabs({name: 'Tab3'})}
        {this.tabs({name: 'Tab4'})}
        {this.tabs({name: 'Tab5'})}
      </Tab.Navigator>
    );
  }
}
