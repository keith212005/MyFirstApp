import * as Action from './actionTypes';

export const changeConnectionState = (status) => ({
  type: Action.CHANGE_CONNECTION_STATUS,
  status: status,
});
