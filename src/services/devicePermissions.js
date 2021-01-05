/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Alert} from 'react-native';

import {
  request,
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export default class DevicePermissions extends Component {
  requestCameraPermission() {
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
                reject(RESULTS.DENIED);
                break;
              case RESULTS.LIMITED:
                console.log(RESULTS.LIMITED);
                reject(RESULTS.LIMITED);
                break;
              case RESULTS.GRANTED:
                console.log(RESULTS.GRANTED);
                resolve(RESULTS.GRANTED);
                break;
              case RESULTS.BLOCKED:
                console.log(RESULTS.BLOCKED);
                Alert.alert(
                  'Requesting Camera Permission',
                  'Please allow access to camera in the settings.',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        this.props.dismiss();

                        // openSettings().catch(() => console.warn('cannot open setting'));
                      },
                    },
                  ],
                  {cancelable: false},
                );
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
