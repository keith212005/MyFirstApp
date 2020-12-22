import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import firebase from '@react-native-firebase/app';

import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
var PushNotification = require('react-native-push-notification');

export default class Firebase extends Component {
  checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      this.getFcmToken();
    } else {
      this.requestPermission();
    }
  };

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // console.log('FCM TOKEN = ', fcmToken);
    } else {
      // console.log('Failed No token received');
    }
  };

  requestPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorised
    } catch (error) {
      // User has rejected permissions
    }
  };

  async addNotificationListener(props) {
    this.checkPermission();

    messaging().setBackgroundMessageHandler(function (message) {
      console.log('Handling background message', message);
    });

    // Called everytime when notification is recieved
    messaging().onMessage((message) => {
      console.log('message from firebase = ', JSON.stringify(message));
      PushNotification.localNotification({
        message: message.notification.body,
        title: message.notification.title,
        data: message.data,
      });

      PushNotification.configure({
        onNotification: function (message) {
          message.finish(PushNotificationIOS.FetchResult.NoData);
          console.log('onNotification callback()...', JSON.stringify(message));
          message.foreground
            ? props.navigation.navigate(message.data.Screen)
            : null;
        },
        popInitialNotification: false,
        requestPermissions: true,
      });
    });

    // execute everytime we open the app from quite state.
    messaging()
      .getInitialNotification()
      .then((message) => {
        console.log('App open from quite state', JSON.stringify(message));
        message ? props.navigation.navigate(message.data.Screen) : null;
      });

    // When your app is opened in background and you get notification this
    // gets tiggered
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });
  }

  render() {
    return null;
  }
}
