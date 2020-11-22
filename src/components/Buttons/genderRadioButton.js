import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import {RadioButton, Text} from 'react-native-paper';
import {COLORS, FONTFAMILY} from '@resource';

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
              <Text
                style={styles.title}
                onPress={() => this.setState({value: 'Male'})}>
                Male
              </Text>
              <RadioButton value="Female" />
              <Text
                style={styles.title}
                onPress={() => this.setState({value: 'Female'})}>
                Female
              </Text>
            </View>
          </RadioButton.Group>
        </View>
        {this.props.isError ? (
          <Text style={commonStyles.errorStyle}>{this.props.error_text}</Text>
        ) : null}
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
    fontFamily: FONTFAMILY.RobotoMedium,
    color: COLORS.grayFont,
  },
  radioGroup: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
