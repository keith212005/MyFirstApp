// Note: don't forget to export action type constants below
export * from './actionTypes';

import * as autoLogin from './autoLogin';
import * as addNetworkListener from './addNetworkListener';
import * as changeIsOpenFirstTime from './changeIsOpenFirstTime';
import * as saveUserInfo from './saveUserInfo';
import * as resetStore from './resetStore';
import * as setAppLanguage from './setAppLanguage';
import * as setSafeAreaInsets from './setSafeAreaInsets';
import * as storeFcmToken from './storeFcmToken';

export const actionCreaters = Object.assign(
  {},
  autoLogin,
  addNetworkListener,
  changeIsOpenFirstTime,
  saveUserInfo,
  resetStore,
  setAppLanguage,
  setSafeAreaInsets,
  storeFcmToken,
);
