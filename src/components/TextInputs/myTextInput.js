import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

import {responsiveWidth, responsiveHeight, COLORS} from '@resource';

export default class MyTextInput extends Component {
  state = {
    iconColor: COLORS.gray,
    eyeIconColor: COLORS.gray,
    showEyeIcon: 'eye-off-outline',
    secureTextEntry: this.props.secureTextEntry,
    value: this.props.value,
  };
  render() {
    // console.log('myTextInput render called - ' + this.props.iconName);

    let props = this.props;
    const handleOnFocus = () => {
      this.setState({
        iconColor: COLORS.primary,
        eyeIconColor: COLORS.primary,
      });
      this.props.onFocus();
    };

    const handleOnBlur = () => {
      this.setState({iconColor: COLORS.gray, eyeIconColor: COLORS.gray});
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
        <View>
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
            theme={{colors: {primary: COLORS.primary}, roundness: 6}}
            blurOnSubmit={false}
            ref={props.forwardRef}
            pointerEvents="none"
            isInputValid={this.state.isInputValid}
            errorMessage={this.state.errorMessage}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            blurOnSubmit={false}
            selectTextOnFocus={true}
            selectionColor={COLORS.secondary}
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
            <Text style={styles.errorStyle}>{this.props.error_text}</Text>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    color: COLORS.red,
  },
  input: {
    borderRadius: 30,
  },
});
