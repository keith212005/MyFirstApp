import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import autoLogin from './autoLogin';
import connectionStatus from './connectionState';

const rootReducer = combineReducers({
  autoLogin: autoLogin,
  connectionStatus: connectionStatus,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['autoLogin', 'navigationReducer'], // only navigation will be persisted
  blacklist: ['connectionStatus'], // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
