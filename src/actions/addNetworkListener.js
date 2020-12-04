import * as Action from './actionTypes';

import NetInfo from '@react-native-community/netinfo';

export const addNetworkListener = (status) => ({
  type: Action.CHANGE_CONNECTION_STATUS,
  status,
});
