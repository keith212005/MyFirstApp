import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

import {responsiveWidth, COLORS} from '@resource';

export default class MyTextInput extends Component {
  state = {
    iconColor: COLORS.gray,
    eyeIconColor: COLORS.gray,
    showEyeIcon: 'eye-off-outline',
    secureTextEntry: this.props.secureTextEntry,
  };

  handleFocus = () => {
    console.log('foused');
    this.setState({
      iconColor: COLORS.primary,
      eyeIconColor: COLORS.primary,
    });
  };

  handleBlur = () => {
    console.log('focus lost');
    this.setState({iconColor: COLORS.gray, eyeIconColor: COLORS.gray});
  };

  togglePasswordVisible = () => {
    if (this.state.showEyeIcon != 'eye') {
      this.setState({showEyeIcon: 'eye', secureTextEntry: false});
    } else {
      this.setState({
        showEyeIcon: 'eye-off-outline',
        secureTextEntry: true,
      });
    }
  };

  render() {
    let props = this.props;
    let textlength = this.props.value ? this.props.value.lenght : 0;
    return (
      <View>
        <TextInput
          mode={props.mode ? props.mode : 'outlined'}
          label={props.label ? props.label : ''}
          maxLength={props.maxLength ? props.maxLength : null}
          value={props.value}
          onChangeText={(text) => props.onChangeText(text)}
          secureTextEntry={this.state.secureTextEntry}
          left={
            <TextInput.Icon
              name={props.iconName}
              color={this.state.iconColor}
            />
          }
          right={
            props.showEyeIcon === true ? (
              <TextInput.Icon
                name={this.state.showEyeIcon}
                color={this.state.eyeIconColor}
                forceTextInputFocus={false}
                onPress={() => this.togglePasswordVisible()}
                onPressEye={() => console.log('clksdnf')}
              />
            ) : null
          }
          theme={{colors: {primary: '#009387'}, roundness: 5}}
          blurOnSubmit={false}
          selectTextOnFocus
          pointerEvents="none"
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
        />
      </View>
    );
  }
}
