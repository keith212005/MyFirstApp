import React from 'react';
import {View, StyleSheet, Pressable, Keyboard} from 'react-native';

import {RadioButton, Text} from 'react-native-paper';
import {colors, fontFamily} from '@resource';
import {commonStyle} from '@resource';

export default class GenderRadioButton extends React.Component {
  state = {
    value: '',
  };

  render() {
    const handleClick = (text) => {
      Keyboard.dismiss;
      this.setState({value: text});
      this.props.onSuccess(text);
    };
    return (
      <>
        <RadioButton.Group
          value={this.state.value}
          onValueChange={(text) => handleClick(text)}>
          <View style={styles.radioGroup}>
            <RadioButton value="Male" />
            <Text
              style={styles.title}
              onPress={() => {
                Keyboard.dismiss();
                this.setState({value: 'Male'});
                this.props.onSuccess(this.state.value);
              }}>
              Male
            </Text>
            <RadioButton value="Female" />
            <Text
              style={styles.title}
              onPress={() => {
                Keyboard.dismiss();
                this.setState({value: 'Female'});
                this.props.onSuccess(this.state.value);
              }}>
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
