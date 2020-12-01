import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {TextInput} from 'react-native-paper';

import {colors} from '@resource';
import {commonStyle} from '@constants';

export default class MyTextInput extends Component {
  state = {
    iconColor: colors.gray,
    eyeIconColor: colors.gray,
    showEyeIcon: 'eye-off-outline',
    secureTextEntry: this.props.secureTextEntry,
    value: this.props.value,
  };
  render() {
    let props = this.props;
    const handleOnFocus = () => {
      this.setState({
        iconColor: colors.primary,
        eyeIconColor: colors.primary,
      });
      this.props.onFocus();
    };

    const handleOnBlur = () => {
      this.setState({iconColor: colors.gray, eyeIconColor: colors.gray});
    };

    const togglePassword = () => {
      if (this.state.showEyeIcon != 'eye') {
        this.setState({showEyeIcon: 'eye', secureTextEntry: false});
      } else {
        this.setState({
          showEyeIcon: 'eye-off-outline',
          secureTextEntry: true,
        });
      }
    };

    return (
      <>
        <TextInput
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
          theme={{colors: {primary: colors.primary}, roundness: 14}}
          blurOnSubmit={false}
          ref={props.forwardRef}
          pointerEvents="none"
          isInputValid={this.state.isInputValid}
          errorMessage={this.state.errorMessage}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          blurOnSubmit={false}
          selectTextOnFocus={true}
          selectionColor={colors.secondary}
          multiline={props.multiline ? props.multiline : false}
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
                onPress={() => togglePassword()}
              />
            ) : null
          }
        />
        {this.props.isError ? (
          <Text style={commonStyle.errorStyle}>{this.props.error_text}</Text>
        ) : null}
      </>
    );
  }
}
