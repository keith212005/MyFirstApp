import * as Action from '@actions';
import {userInfoProps} from '@constants';

const intialState = {
  ...userInfoProps,
};

export default saveUserInfo = (state = intialState, action) => {
  switch (action.type) {
    case Action.SAVE_USER_INFO:
      return {
        id: action.data.Id,
        avatar: action.data.avatar,
        firstname: action.data.fName,
        lastname: action.data.lName,
        email: action.data.email,
        phone: action.data.phone,
        address: action.data.address,
        gender: action.data.gender,
        dob: action.data.dob,
      };
    case Action.RESET_APP:
      return state;
    default:
      return state;
  }
};
