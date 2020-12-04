import React from 'react';
import {View, StyleSheet, Pressable, Keyboard} from 'react-native';

import {RadioButton, Text} from 'react-native-paper';
import {colors, fontFamily} from '@resource';
import {commonStyle} from '@resource';

export default class GenderRadioButton extends React.Component {
  state = {
    value: '',
  };

  handleClick = (text) => {
    Keyboard.dismiss;
    this.setState({value: text});
    this.props.onSuccess(text);
  };

  render() {
    return (
      <>
        <RadioButton.Group
          value={this.state.value}
          onValueChange={(text) => this.handleClick(text)}>
          <View style={styles.radioGroup}>
            <RadioButton value="Male" />
            <Text style={styles.title} onPress={() => this.handleClick('Male')}>
              Male
            </Text>
            <RadioButton value="Female" />
            <Text
              style={styles.title}
              onPress={() => this.handleClick('Female')}>
              Female
            </Text>
          </View>
        </RadioButton.Group>

        <Text style={commonStyle.errorStyle}>
          {this.props.isError ? this.props.error_text : null}
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.RobotoMedium,
    color: colors.grayFont,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
