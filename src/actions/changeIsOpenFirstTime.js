import * as Action from './actionTypes';

export const changeIsOpenFirstTime = (value) => ({
  type: Action.CHANGE_FIRST_TIME_STATUS,
  data: value,
});
