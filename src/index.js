import React from 'react';
import {Alert} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {openDatabase} from 'react-native-sqlite-storage';

import {StackNavigator} from '@navigator';
import {store, persistor} from '@reducers';
import {DB} from '@storage';
import messaging from '@react-native-firebase/messaging';

export default class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    DB.initTables();
  }

  componentDidMount() {
    this.requestUserPermission();

    // When the application is running, but in the background.
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      this.props.navigation.navigate(remoteMessage.data.type);
    });

    // When the application is opened from a quit state.
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log('inside>>>>>>>>>>>>>>' + JSON.stringify(remoteMessage));
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    // Register foreground handler
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('onMessage....');
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('setBackgroundMessageHandler...', remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();

    console.log('st>>>>>>>>>>>>>>', authStatus);
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
          console.log(
            'User has notification permissions disabled',
            authorizationStatus,
          );
        }
      });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
