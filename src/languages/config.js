import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import I18n from 'react-native-i18n';

import en from './en';
import fr from './fr';
import hi from './hi';
import es from './es';

I18n.translations = {
  en,
  fr,
  hi,
  es,
};
I18n.fallbacks = false;
// I18n.locale = 'en';

export default I18n;
