import * as Action from './actionTypes';

import NetInfo from '@react-native-community/netinfo';

export const addNetworkListener = () => {
  let status = null;
  NetInfo.addEventListener((state) => {
    status = state.isConnected;
  });

  return {
    type: Action.CHANGE_CONNECTION_STATUS,
    status: status,
  };
};
