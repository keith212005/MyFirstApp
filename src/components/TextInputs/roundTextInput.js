import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import {colors, commonStyle, fontFamily, icon} from '@resource';

export default class RoundTextInput extends React.PureComponent {
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChangeText={(value) => this.props.onChangeText(value)}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50,
    padding: 10,
    margin: 5,
  },
});
