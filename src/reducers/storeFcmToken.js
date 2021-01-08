import * as Action from '@actions';

const intialState = {
  Fcm_Token: undefined,
};

export default storeFcmToken = (state = intialState, action) => {
  switch (action.type) {
    case Action.STORE_FCM_TOKEN:
      return {
        Fcm_Token: action.data,
      };
    default:
      return state;
  }
};
