import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {RadioButton} from 'react-native-paper';

export default class MyRadioButton extends Component {
  state = {
    value: this.props.code,
  };

  handleClick = (text) => {
    this.setState({value: text});
    this.props.onSuccess(text);
  };

  render(props) {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
          onPress={() => this.handleClick(this.props.code)}>
          {this.props.title}
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => this.handleClick(newValue)}
          value={this.state.value}>
          <RadioButton value={this.state.value} />
        </RadioButton.Group>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
});
