/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

export default class MyCalendar extends Component {
  render() {
    return (
      <>
        <Calendar
          minDate={'2020-11-10'}
          onDayPress={(day) => console.log('selected day', day)}
          onDayLongPress={(day) => console.log('selected day', day)}
          hideExtraDays={true}
          firstDay={0}
          enableSwipeMonths={true}
          markedDates={{
            '2020-12-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2020-12-17': {marked: true},
            '2020-12-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2020-12-19': {disabled: true, disableTouchEvent: true},
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#dbd1d1',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </>
    );
  }
}
