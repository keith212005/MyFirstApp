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
    errMsg: '',
  };

  render() {
    let props = this.props;

    const handleOnFocus = () => {
      this.setState({
        iconColor: COLORS.primary,
        eyeIconColor: COLORS.primary,
      });
    };

    const handleOnBlur = () => {
      this.setState({iconColor: COLORS.gray, eyeIconColor: COLORS.gray});
      this.props.value.length > 0
        ? checkForValidEmail()
        : this.setState({errMsg: props.emptyError});
    };

    const checkForValidEmail = () => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
      if (reg.test(props.value) === false && props.iconName === 'email') {
        this.setState({errMsg: props.invalidError});
      } else {
        this.setState({errMsg: ''});
      }
    };

    const handleOnChangeText = (text) => {
      this.setState({errMsg: ''});
      props.onChangeText(text);
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
            style={styles.input}
            mode={props.mode ? props.mode : 'outlined'}
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            returnKeyType={props.returnKeyType ? props.returnKeyType : 'next'}
            label={props.label ? props.label : ''}
            maxLength={props.maxLength ? props.maxLength : null}
            value={props.value}
            ref={props.forwardRef}
            onSubmitEditing={this.props.onSubmitEditing}
            onChangeText={(text) => handleOnChangeText(text)}
            secureTextEntry={this.state.secureTextEntry}
            theme={{colors: {primary: COLORS.primary}, roundness: 6}}
            blurOnSubmit={false}
            pointerEvents="none"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            blurOnSubmit={false}
            selectTextOnFocus={true}
            selectionColor={COLORS.secondary}
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
                  onPressEye={() => console.log('clksdnf')}
                />
              ) : null
            }
          />
          {this.state.errMsg ? (
            <Text style={styles.errorStyle}>{this.state.errMsg}</Text>
          ) : null}
          {this.props.isError ? (
            <Text style={styles.errorStyle}>{props.invalidPassword}</Text>
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
});
