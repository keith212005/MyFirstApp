import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {TextInput as PaperTextInput} from 'react-native-paper';

import {colors, commonStyle, fontFamily} from '@resource';

export default class MyTextInput extends Component {
  state = {
    iconColor: colors.gray,
    eyeIconColor: colors.gray,
    showEyeIcon: 'eye-off-outline',
    secureTextEntry: this.props.secureTextEntry,
    value: this.props.value,
  };

  handleOnFocus = () => {
    this.setState({
      iconColor: colors.primary,
      eyeIconColor: colors.primary,
    });
    this.props.onFocus();
  };

  handleOnBlur = () => {
    this.setState({iconColor: colors.gray, eyeIconColor: colors.gray});
  };

  togglePassword = () => {
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

    return (
      <>
        <PaperTextInput
          error={props.isError}
          mode={props.mode ? props.mode : 'outlined'}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          returnKeyType={props.returnKeyType ? props.returnKeyType : 'next'}
          label={props.label ? props.label : ''}
          maxLength={props.maxLength ? props.maxLength : null}
          value={props.value}
          onSubmitEditing={this.props.onSubmitEditing}
          onEndEditing={this.props.onEndEditing}
          onChangeText={(text) => this.props.onChangeText(text)}
          secureTextEntry={this.state.secureTextEntry}
          theme={{
            colors: {primary: colors.primary},
            roundness: 14,
            fonts: {medium: fontFamily.RobotoBold},
          }}
          blurOnSubmit={false}
          ref={props.forwardRef}
          pointerEvents="none"
          isInputValid={this.state.isInputValid}
          errorMessage={this.state.errorMessage}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          blurOnSubmit={false}
          selectTextOnFocus={true}
          selectionColor={colors.secondary}
          multiline={props.multiline ? props.multiline : false}
          left={
            <PaperTextInput.Icon
              forceTextInputFocus={true}
              name={props.iconName}
              color={this.state.iconColor}
            />
          }
          right={
            props.showEyeIcon === true ? (
              <PaperTextInput.Icon
                name={this.state.showEyeIcon}
                color={this.state.eyeIconColor}
                forceTextInputFocus={false}
                onPress={() => this.togglePassword()}
              />
            ) : null
          }
        />

        <Text style={commonStyle.errorStyle}>
          {this.props.isError ? this.props.error_text : null}
        </Text>
      </>
    );
  }
}

export const styles = StyleSheet.create({
  textAreaInput: {},
});
