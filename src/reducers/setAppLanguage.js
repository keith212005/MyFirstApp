import * as Action from '@actions';

const intialState = {
  language: '',
};

export default isOpenFirstTime = (state = intialState, action) => {
  switch (action.type) {
    case Action.SET_APP_LANGUAGE:
      return {
        ...state,
        language: action.data,
      };
    default:
      return state;
  }
};
