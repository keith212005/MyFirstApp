/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors, fontFamily} from '@resource';
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
        dayComponent={({date, state}) => {
          var marked =
            (date.day == 2 && date.month == 3) ||
            (date.day == 31 && date.month == 3) ||
            (date.day == 21 && date.month == 4)
              ? true
              : false;
          return (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderWidth: marked ? 1 : null,
                  borderColor: marked ? 'red' : null,
                  borderRadius: marked ? 50 : null,
                  borderStyle: marked ? 'dotted' : null,
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
              {marked ? (
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
          textDayFontFamily: fontFamily.RobotoRegular,
          textMonthFontFamily: fontFamily.RobotoRegular,
          textDayHeaderFontFamily: fontFamily.RobotoRegular,
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
