import I18n from 'react-native-i18n';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import en from './en';
import fr from './fr';
import hi from './hi';

I18n.translations = {
  en,
  fr,
  hi,
};
I18n.fallbacks = false;
I18n.locale = 'en';

export default I18n;
