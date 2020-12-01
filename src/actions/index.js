import * as autoLogin from './autoLogin';
import * as connectionState from './connectionState';

export const bindAutoLoginActions = Object.assign({}, autoLogin);
export const bindConnectionState = Object.assign({}, connectionState);

export {
  ADD_AUTO_LOGIN,
  REMOVE_AUTO_LOGIN,
  CHANGE_CONNECTION_STATUS,
} from './actionTypes';
