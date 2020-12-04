export {
  ADD_AUTO_LOGIN,
  REMOVE_AUTO_LOGIN,
  CHANGE_CONNECTION_STATUS,
} from './actionTypes';
import * as autoLogin from './autoLogin';
import * as addNetworkListener from './addNetworkListener';

export const actionCreaters = Object.assign({}, autoLogin, addNetworkListener);
