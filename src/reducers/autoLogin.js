import * as Action from '@actions';

const intialState = {
  status: false,
};

export default autoLogin = (state = intialState, action) => {
  switch (action.type) {
    case Action.ADD_AUTO_LOGIN:
      return {
        status: true,
      };
    case Action.REMOVE_AUTO_LOGIN:
      return {
        status: false,
      };
    default:
      return state;
  }
};
