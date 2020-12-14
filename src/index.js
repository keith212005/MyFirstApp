import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {openDatabase} from 'react-native-sqlite-storage';

import {StackNavigator} from '@navigator';
import {store, persistor} from '@reducers';

export default class App extends React.Component {
  constructor() {
    super();
    var db = openDatabase({name: 'MyFirstAppDB.db'});
    console.log(JSON.stringify(db));
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS users', []);
            txn.executeSql(
              'CREATE TABLE USERS(Id INTEGER PRIMARY KEY AUTOINCREMENT, fName text,' +
                'lName text, email VARCHAR(50), password VARCHAR(50), phone INTEGER,' +
                ' address TEXT, gender BOOLEAN, dob TEXT)',
              [],
            );
          }
        },
      );
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
