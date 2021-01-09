import I18n from 'react-native-i18n';
import {storageKey, constant} from '@constants';
import {setMultipleAsyncStorage} from '@storage';
import {en, hi, es, fr} from './index';

export const changeLanguage = (params) => {
  I18n.fallbacks = true;

  I18n.translations = {
    en,
    fr,
    hi,
    es,
  };

  if (params === constant.ENGLISH_LANG) {
    I18n.locale = 'en';
  } else if (params === constant.HINDI_LANG) {
    I18n.locale = 'hi';
  } else if (params === constant.FRENCH_LANG) {
    I18n.locale = 'fr';
  } else if (params === constant.SPANISH_LANG) {
    I18n.locale = 'es';
  }
};
