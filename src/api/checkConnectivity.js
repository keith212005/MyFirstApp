import {store} from '@reducers';

export function checkConnectivity() {
  const props = store.getState();
  return new Promise(function (resolve, reject) {
    props.connectionStatus.isOnline
      ? resolve(true)
      : reject('check if you are connected to internet.');
  });
}
