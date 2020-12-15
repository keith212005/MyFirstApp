import * as Action from '@actions';
import {userInfoProps} from '@constants';

const intialState = {
  ...userInfoProps,
};

export default saveUserInfo = (state = intialState, action) => {
  switch (action.type) {
    case Action.SAVE_USER_INFO:
      return {
        status: true,
      };
    default:
      return state;
  }
};
