/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Alert, Linking} from 'react-native';

import {
  request,
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import {isEqual} from 'lodash';

import messaging from '@react-native-firebase/messaging';

export default class DevicePermissions extends Component {
  checkCameraPermission() {
    return new Promise(function (resolve, reject) {
      isEqual(Platform.OS, 'ios')
        ? check(PERMISSIONS.IOS.CAMERA).then((result) => resolve(result))
        : resolve(result);
    });
  }

  requestCameraAccess() {
    return new Promise((resolve, reject) => {
      console.log('request command run');
      request(PERMISSIONS.IOS.CAMERA).then((result) => resolve(result));
    });
  }

  async requestNotificationPermission() {
    const authorizationStatus = await messaging().requestPermission();
    console.log('notification authorizationStatus = ', authorizationStatus);
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      resolve();
    } else {
      Alert.alert(
        'Notifications are dissabled. Please alllow in settings.',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => Linking.openURL('app-settings://')},
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return null;
  }
}
