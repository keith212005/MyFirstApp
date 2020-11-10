import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

export default class SettingScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <Text>Setting Screen</Text>
        </View>
      </>
    );
  }
}
