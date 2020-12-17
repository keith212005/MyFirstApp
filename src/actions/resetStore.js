import * as Action from './actionTypes';

export const resetStore = () => ({
  type: Action.RESET_STORE,
  data: null,
});
