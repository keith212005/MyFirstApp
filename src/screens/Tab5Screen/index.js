import React from 'react';
import {View, Text} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

import {styles} from './style';
import * as Components from '@components';

export default class Tab5Screen extends React.Component {
  render() {
    return (
      <>
        <Components.CustomHeader
          title="Tab 5 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </>
    );
  }
}
