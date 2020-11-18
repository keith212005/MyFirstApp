import React from 'react';
import {View, Text, BackHandler} from 'react-native';

import {DrawerActions, StackActions} from '@react-navigation/native';

import {styles} from './style';
import * as Components from '@components';

export default class Tab3Screen extends React.Component {
  componentDidMount() {
    this._unsubscribefocus = this.props.navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this._unsubscribeblur = this.props.navigation.addListener('blur', () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    });
  }
  componentWillUnmount() {
    this._unsubscribefocus();
    this._unsubscribeblur();
  }

  handleBackButton = () => {
    console.log('tab 3 back button pressed');
  };

  render() {
    return (
      <>
        <Components.CustomHeader
          title="Tab 3 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </>
    );
  }
}
