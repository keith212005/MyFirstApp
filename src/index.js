import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {openDatabase} from 'react-native-sqlite-storage';

import {StackNavigator} from '@navigator';
import {store, persistor} from '@reducers';
import {DB} from '@storage';

export default class App extends React.Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    DB.initTables();
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
