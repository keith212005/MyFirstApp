import * as Action from '@actions';

const intialState = {
  isOnline: false,
};

export default connectionState = (state = intialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CONNECTION_STATUS:
      return {
        isOnline: action.status,
      };
    default:
      return state;
  }
};
