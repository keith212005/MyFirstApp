import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {store} from '@reducers';

export function checkConnectivity() {
  console.log(JSON.stringify(store.getState()));
  const props = store.getState();
  return new Promise(function (resolve, reject) {
    props.connectionStatus.isOnline
      ? resolve(true)
      : reject('check if you are connected to internet.');
  });
}
