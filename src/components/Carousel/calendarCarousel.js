import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CalendarCarousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the CalendarCarousel component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
