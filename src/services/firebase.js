import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
var PushNotification = require('react-native-push-notification');

export default class Firebase extends Component {
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    await messaging()
      .requestPermission()
      .then((authorizationStatus) => {
        if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
          console.log('User has notification permissions enabled.');
        } else if (
          authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
        ) {
          console.log('User has provisional notification permissions.');
        } else {
          console.log('User has notification permissions disabled');
        }
      });
  }

  getToken() {
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });
  }

  async addNotificationListener() {
    return new Promise(function (resolve, reject) {
      // this.requestUserPermission();
      // this.getToken();

      messaging().setBackgroundMessageHandler(function (message) {
        console.log('Handling background message', message);
      });

      // Called everytime when notification is recieved
      messaging().onMessage((message) => {
        console.log(
          'message recived from firebase >>>',
          JSON.stringify(message),
        );
        PushNotification.localNotification({
          message: message.notification.body,
          title: message.notification.title,
          data: message.data,
        });

        PushNotification.configure({
          onNotification: function (message) {
            message.finish(PushNotificationIOS.FetchResult.NoData);
            console.log('onNotification callback()...');
            console.log('NOTIFICATION:', JSON.stringify(message));
            message != null
              ? resolve(message)
              : reject('reject from local notification');
          },
          popInitialNotification: false,
          requestPermissions: true,
        });
      });

      messaging()
        .getInitialNotification()
        .then((message) => {
          console.log('App open from quite state', JSON.stringify(message));
          message != null
            ? resolve(message)
            : reject('rejecct from getInitialNotification');
        });
    });
  }

  render() {
    return null;
  }
}
