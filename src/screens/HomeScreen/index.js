import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
      </>
    );
  }
}
