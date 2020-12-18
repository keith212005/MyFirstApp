import {store} from '@reducers';

export function checkConnectivity() {
  const props = store.getState();
  return new Promise(function (resolve, reject) {
    props.connectionState.isOnline
      ? resolve(true)
      : reject('Check if you are connected to internet.');
  });
}
