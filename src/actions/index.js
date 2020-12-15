// Note: don't forget to export action type constants below
export {
  ADD_AUTO_LOGIN,
  REMOVE_AUTO_LOGIN,
  CHANGE_CONNECTION_STATUS,
  CHANGE_FIRST_TIME_STATUS,
  SAVE_USER_INFO,
} from './actionTypes';

import * as autoLogin from './autoLogin';
import * as addNetworkListener from './addNetworkListener';
import * as changeIsOpenFirstTime from './changeIsOpenFirstTime';
import * as saveUserInfo from './saveUserInfo';

export const actionCreaters = Object.assign(
  {},
  autoLogin,
  addNetworkListener,
  changeIsOpenFirstTime,
  saveUserInfo,
);
