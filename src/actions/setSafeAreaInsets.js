import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

import * as Action from './actionTypes';

export function setSafeAreaInsets() {
  return (dispatch) => {
    try {
      if (Platform.OS == 'android') {
        var insets = {top: 25, bottom: 0};
        dispatch({
          type: Action.SET_SAFE_AREA_INSETS,
          data: insets,
        });
      } else {
        StaticSafeAreaInsets.getSafeAreaInsets((values) => {
          console.log('valuees^^^^^^^^^^^^^    ===   ', values);
          const {safeAreaInsetsBottom, safeAreaInsetsTop} = values;
          var insets = {top: safeAreaInsetsTop, bottom: safeAreaInsetsBottom};
          dispatch({
            type: Action.SET_SAFE_AREA_INSETS,
            data: insets,
          });
        });
      }
    } catch (e) {}
  };
}
