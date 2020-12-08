/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors} from '@resource';
import * as Utils from '@utils';

import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

const dottedSelection = {
  marked: true,
};

export default class MyCalendarList extends Component {
  render() {
    return (
      <CalendarList
        current={'2020-03-01'}
        markingType={'custom'}
        dayComponent={({date, state, marking}) => {
          // console.log('markign=' + JSON.stringify(marking));

          return (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderWidth: marking.marked ? 1 : null,
                  borderColor: marking.marked ? 'red' : null,
                  borderRadius: marking.marked ? 50 : null,
                  borderStyle: marking.marked ? 'dotted' : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 5,
                  paddingBottom: 5,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: date.day == 21 && date.month == 4 ? 'cyan' : 'black',
                  }}>
                  {date.day}
                </Text>
              </View>
              {(date.day == 2 && date.month == 3) ||
              (date.day == 31 && date.month == 3) ||
              (date.day == 21 && date.month == 4) ? (
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    position: 'absolute',
                    paddingLeft: 66,
                  }}
                  resizeMode="contain"
                  source={{uri: Utils.getIcon('camera')}}
                />
              ) : null}
            </View>
          );
        }}
        markedDates={{
          '2020-03-01': {marked: true},
          '2020-03-07': {marked: true},
          '2020-03-08': {marked: true},
          '2020-03-15': {marked: true},
          '2020-03-29': {marked: true},
          '2020-03-31': {marked: true},
          '2020-03-07': {marked: true},
          '2020-04-05': {marked: true},
          '2020-04-12': {marked: true},
          '2020-04-21': {marked: true},
        }}
        showScrollIndicator={false}
        displayLoadingIndicator={false}
        onVisibleMonthsChange={(months) => {
          console.log('now these months are visible', months);
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
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
          monthTextColor: 'red',
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
    );
  }
}
