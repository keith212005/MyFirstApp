import * as Action from '@actions';

const intialState = {
  status: true,
};

export default isOpenFirstTime = (state = intialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FIRST_TIME_STATUS:
      console.log('changeIsOpenFirstTime called...');
      return {
        ...state,
        status: action.data,
      };

    default:
      return state;
  }
};
