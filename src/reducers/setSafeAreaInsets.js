import * as Action from '@actions';

const intialState = {
  insets: false,
};

export default setSafeAreaInsets = (state = intialState, action) => {
  switch (action.type) {
    case Action.SET_SAFE_AREA_INSETS:
      return {
        insets: action.data,
      };
    default:
      return state;
  }
};
