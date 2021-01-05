import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import {colors, commonStyle, fontFamily, icon} from '@resource';

export default class MyTextInput extends Component {
  state = {
    iconColor: colors.gray,
    eyeIconColor: colors.gray,
    showEyeIcon: icon.eye_off,
    secureTextEntry: this.props.secureTextEntry,
    value: this.props.value,
    borderColor: colors.gray,
  };

  handleOnFocus = () => {
    this.setState({
      iconColor: colors.primary,
      eyeIconColor: colors.primary,
      borderColor: colors.primary,
    });
    this.props.onFocus();
  };

  handleOnBlur = () => {
    this.setState({
      iconColor: colors.gray,
      eyeIconColor: colors.gray,
      borderColor: colors.gray,
    });
  };

  togglePassword = () => {
    if (this.state.showEyeIcon != icon.eye_filled) {
      this.setState({showEyeIcon: icon.eye_filled, secureTextEntry: false});
    } else {
      this.setState({
        showEyeIcon: icon.eye_off,
        secureTextEntry: true,
      });
    }
  };

  render() {
    let props = this.props;

    return (
      <>
        <Text style={styles.label}>{this.props.label}</Text>
        <View
          style={[
            styles.container,
            {borderColor: props.isError ? colors.red : this.state.borderColor},
          ]}>
          <Image
            style={{height: 20, width: 20, margin: 15}}
            resizeMode="contain"
            source={{uri: props.iconName.toString()}}
          />

          <TextInput
            style={styles.input}
            error={props.isError}
            mode={props.mode ? props.mode : 'outlined'}
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            returnKeyType={props.returnKeyType ? props.returnKeyType : 'next'}
            label={props.label ? props.label : ''}
            maxLength={props.maxLength ? props.maxLength : null}
            value={props.value}
            placeholder={props.placeholder}
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
            isInputValid={this.state.isInputValid}
            errorMessage={this.state.errorMessage}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            blurOnSubmit={false}
            selectTextOnFocus={true}
            selectionColor={colors.secondary}
            multiline={props.multiline ? props.multiline : false}
          />

          {props.showEyeIcon ? (
            <Pressable onPress={() => this.togglePassword()}>
              <Image
                style={styles.eyeIcon}
                resizeMode="contain"
                source={{uri: this.state.showEyeIcon}}
              />
            </Pressable>
          ) : null}
        </View>
        <Text style={commonStyle.errorStyle}>
          {this.props.isError ? this.props.error_text : null}
        </Text>
      </>
    );
  }
}

export const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.RobotoBold,
    color: colors.gray,
  },
  eyeIcon: {
    height: 23,
    width: 23,
    margin: 15,
  },
  input: {flex: 2},
  container: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
