import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SquareButton extends Component {
  render() {
    return (
      <Button
        title={this.props.title}
        type="outline"
        onPress={this.props.onPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
