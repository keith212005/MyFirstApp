import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import {RadioButton, Text} from 'react-native-paper';
import {COLORS} from '@resource';

export default class GenderRadioButton extends React.Component {
  state = {
    value: '',
  };

  render() {
    const handleClick = (text) => {
      this.setState({value: text});
      this.props.onSuccess(text);
    };
    return (
      <>
        <Text style={styles.title}>Gender</Text>
        <View style={styles.container}>
          <RadioButton.Group
            value={this.state.value}
            onValueChange={(text) => handleClick(text)}>
            <View style={styles.radioGroup}>
              <RadioButton value="Male" />
              <Text onPress={() => this.setState({value: 'Male'})}>Male</Text>
              <RadioButton value="Female" />
              <Text onPress={() => this.setState({value: 'Female'})}>
                Female
              </Text>
            </View>
          </RadioButton.Group>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
  },
  title: {
    marginTop: 5,
    fontWeight: '700',
  },
  radioGroup: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
