export {
  ADD_AUTO_LOGIN,
  REMOVE_AUTO_LOGIN,
  CHANGE_CONNECTION_STATUS,
  CHANGE_FIRST_TIME_STATUS,
} from './actionTypes';
import * as autoLogin from './autoLogin';
import * as addNetworkListener from './addNetworkListener';
import * as changeIsOpenFirstTime from './changeIsOpenFirstTime';

export const actionCreaters = Object.assign(
  {},
  autoLogin,
  addNetworkListener,
  changeIsOpenFirstTime,
);
