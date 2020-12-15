import * as Action from './actionTypes';

export const saveUserInfo = (data) => ({
  type: Action.SAVE_USER_INFO,
  data: data,
});
