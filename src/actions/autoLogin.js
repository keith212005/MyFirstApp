import * as Action from './actionTypes';

export const addAutoLogin = () => {
  return {
    type: Action.ADD_AUTO_LOGIN,
    data: null,
  };
};

export const removeAutoLogin = () => {
  return {
    type: Action.REMOVE_AUTO_LOGIN,
    data: null,
  };
};
