import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

import {styles} from './style';
import {CustomHeader} from '@components';
import {MyCalendar, MyCalendarList, MyAgenda} from '@components';

export default class Tab3 extends React.Component {
  state = {
    layout: '',
  };
  render() {
    return (
      <SafeAreaView>
        <CustomHeader
          title="Tab 3 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />

        <MyCalendarList />
        {/*
        <MyAgenda />
        <MyCalendar />
        */}
      </SafeAreaView>
    );
  }
}
