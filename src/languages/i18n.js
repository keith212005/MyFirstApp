import I18n from 'react-native-i18n';

import {store} from '@reducers';

import en from './en';
import fr from './fr';
import hi from './hi';

const props = store.getState();

I18n.translations = {
  en,
  fr,
  hi,
};
I18n.fallbacks = false;
I18n.locale = 'hi';

export default I18n;
