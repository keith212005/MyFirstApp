import * as Action from './actionTypes';

export const saveUserInfo = (data) => ({
  type: Action.SAVE_USER_INFO,
  data: data,
});

export const updateUserInfo = (data) => ({
  type: Action.UPDATE_USER_INFO,
  data: data,
});

export const resetUserInfo = () => ({
  type: Action.RESET_USER_INFO,
  data: null,
});
