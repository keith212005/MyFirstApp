import React from 'react';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StackNavigator} from '@navigator';
import {autoLogin} from '@reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['autoLogin'],
  // blacklist: ['autoLogin'],
};

const rootReducer = combineReducers({
  autoLogin: autoLogin,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

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
