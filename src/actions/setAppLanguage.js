import * as Action from './actionTypes';
import * as RNLocalize from 'react-native-localize';

export const setAppLanguage = (languageCode) => ({
  type: Action.SET_APP_LANGUAGE,
  data: languageCode,
});
