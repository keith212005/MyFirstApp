import * as Action from './actionTypes';

import NetInfo from '@react-native-community/netinfo';

let handleConnectionChange;

export function addNetworkListener() {
  return (dispatch) => {
    console.log('entererer');
    handleConnectionChange = (connectionInfo) => {
      console.log(connectionInfo);
      dispatch(connectionChanged(connectionInfo));
    };
    NetInfo.addEventListener((connectionInfo) =>
      handleConnectionChange(connectionInfo),
    );
  };
}

export function unregisterListeners() {
  return (dispatch) => {
    handleConnectionChange &&
      NetInfo.removeEventListener('connectionChange', handleConnectionChange);
  };
}

function connectionChanged(connectionInfo) {
  return (dispatch) => {
    switch (connectionInfo.type) {
      case 'cellular':
        dispatch({
          type: Action.CHANGE_CONNECTION_STATUS,
          status: connectionInfo.isConnected,
        });
        break;
      default:
        dispatch({
          type: Action.CHANGE_CONNECTION_STATUS,
          status: connectionInfo.isConnected,
        });
        break;
    }
  };
}

// export const addNetworkListener = (status) => ({
//   type: Action.CHANGE_CONNECTION_STATUS,
//   status,
// });
