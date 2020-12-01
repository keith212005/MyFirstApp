import React from 'react';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StackNavigator} from '@navigator';
import {store, persistor} from '@reducers';

export default class App extends React.Component {
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
