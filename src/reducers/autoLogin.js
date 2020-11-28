import * as Action from '@actions';

const intialState = {
  autoLogin: false,
};

export default autoLogin = (state = intialState, action) => {
  switch (action.type) {
    case Action.ADD_AUTO_LOGIN:
      return {
        autoLogin: true,
      };
    case Action.REMOVE_AUTO_LOGIN:
      return {
        autoLogin: false,
      };
    default:
      return state;
  }
};
