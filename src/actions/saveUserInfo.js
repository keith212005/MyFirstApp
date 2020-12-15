import * as Action from './actionTypes';

export const addAutoLogin = (arr) => ({
  type: Action.SAVE_USER_INFO,
  data: arr,
});
