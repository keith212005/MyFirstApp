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
  requestCameraAccess() {
    return new Promise((resolve, reject) => {
      request(PERMISSIONS.IOS.CAMERA).then((result) => {
        console.log(result);
        isEqual(result, 'blocked') ? reject(result) : resolve(result);
      });
    });
  }

  checkCameraPermission() {
    return new Promise(function (resolve, reject) {
      if (Platform.OS === 'ios') {
        check(PERMISSIONS.IOS.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log(RESULTS.UNAVAILABLE);
                Alert.alert('Camera not available');
                reject(RESULTS.UNAVAILABLE);
                break;
              case RESULTS.DENIED:
                console.log(RESULTS.DENIED);
                Alert.alert('Camera access is denied.');
                this.requestCameraAccess();
                reject(RESULTS.DENIED);
                break;
              case RESULTS.LIMITED:
                console.log(RESULTS.LIMITED);
                Alert.alert('Camera access is limited.');
                reject(RESULTS.LIMITED);
                break;
              case RESULTS.GRANTED:
                console.log(RESULTS.GRANTED);
                Alert.alert('Camera access granted.');
                resolve(RESULTS.GRANTED);
                break;
              case RESULTS.BLOCKED:
                console.log(RESULTS.BLOCKED);
                // Alert.alert('Camera access is blocked.');
                reject(RESULTS.BLOCKED);
                break;
            }
          })
          .catch((error) => {
            // …
          });
      } else {
        resolve();
      }
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
