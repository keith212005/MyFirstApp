import React from 'react';
import {View, Text} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

import {styles} from './style';
import {CustomHeader} from '@components';
import {MyCalendar} from '@components';

export default class Tab3 extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <CustomHeader
          title="Tab 3 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        <MyCalendar />
      </>
    );
  }
}
