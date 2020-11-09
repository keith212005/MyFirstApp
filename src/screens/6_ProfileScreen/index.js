import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import * as Components from '@components';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <Text>Profile Screen</Text>
        </View>
      </>
    );
  }
}
