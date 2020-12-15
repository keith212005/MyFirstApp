import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import autoLogin from './autoLogin';
import connectionState from './connectionState';
import isOpenFirstTime from './isOpenFirstTime';
import saveUserInfo from './saveUserInfo';

const logger = createLogger({collapsed: true});

const rootReducer = combineReducers({
  autoLogin: autoLogin,
  connectionState: connectionState,
  isOpenFirstTime: isOpenFirstTime,
  saveUserInfo: saveUserInfo,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['autoLogin'], // by default all reducers in root reducer will be persisted
  // blacklist: ['isOpenFirstTime'], // put reducers whose data you dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
