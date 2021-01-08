import * as Action from './actionTypes';

export const storeFcmToken = (token) => ({
  type: Action.STORE_FCM_TOKEN,
  data: token,
});
