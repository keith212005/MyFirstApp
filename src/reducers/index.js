import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as Action from '@actions';

import autoLogin from './autoLogin';
import connectionState from './connectionState';
import isOpenFirstTime from './isOpenFirstTime';
import saveUserInfo from './saveUserInfo';
import setAppLanguage from './setAppLanguage';
import setSafeAreaInsets from './setSafeAreaInsets';

const logger = createLogger({collapsed: true});

const appReducer = combineReducers({
  autoLogin: autoLogin,
  connectionState: connectionState,
  isOpenFirstTime: isOpenFirstTime,
  saveUserInfo: saveUserInfo,
  setAppLanguage: setAppLanguage,
  setSafeAreaInsets: setSafeAreaInsets,
});

const rootReducer = (state, action) => {
  if (action.type === Action.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['autoLogin'], // by default all reducers in root reducer will be persisted
  // blacklist: ['setAppLanguage'], // put reducers whose data you dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
