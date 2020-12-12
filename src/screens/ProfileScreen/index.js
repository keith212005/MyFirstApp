import React from 'react';
import {View, Text, BackHandler, StyleSheet} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {styles} from './style';
import * as Components from '@components';

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Components.CustomHeader
          title="Profile"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />

        <Components.MyWave />
      </>
    );
  }
}
