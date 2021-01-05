/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {
  request,
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export default class DevicePermissions extends Component {
  reuestCameraPermission() {
    return new Promise(function (resolve, reject) {
      if (Platform.OS === 'ios') {
        check(PERMISSIONS.IOS.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                reject(RESULTS.UNAVAILABLE);
                break;
              case RESULTS.DENIED:
                reject(RESULTS.DENIED);
                break;
              case RESULTS.LIMITED:
                reject(RESULTS.LIMITED);
                break;
              case RESULTS.GRANTED:
                console.log('The permission is granted');
                resolve(RESULTS.GRANTED);
                break;
              case RESULTS.BLOCKED:
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

  render() {
    return null;
  }
}
