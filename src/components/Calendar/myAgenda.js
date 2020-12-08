/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

export default class MyAgenda extends Component {
  render() {
    return <Agenda selected={'2012-05-16'} />;
  }
}
