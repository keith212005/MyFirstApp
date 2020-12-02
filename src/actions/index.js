import * as autoLogin from './autoLogin';
import * as addNetworkListener from './addNetworkListener';

export const bindAutoLoginActions = Object.assign({}, autoLogin);
export const bindNetworkListener = Object.assign({}, addNetworkListener);

export {
  ADD_AUTO_LOGIN,
  REMOVE_AUTO_LOGIN,
  CHANGE_CONNECTION_STATUS,
} from './actionTypes';
