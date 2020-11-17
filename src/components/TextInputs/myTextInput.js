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
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    const togglePasswordVisible = () => {
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
            ref={props.forwardRef}
            onSubmitEditing={this.props.onSubmitEditing}
            onChangeText={(text) => handleOnChangeText(text)}
            secureTextEntry={this.state.secureTextEntry}
            theme={{colors: {primary: '#009387'}, roundness: 5}}
            blurOnSubmit={false}
            pointerEvents="none"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            blurOnSubmit={false}
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
                  onPress={() => togglePasswordVisible()}
                  onPressEye={() => console.log('clksdnf')}
                />
              ) : null
            }
          />
          {this.state.errMsg ? (
            <Text style={{color: COLORS.red}}>{this.state.errMsg}</Text>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    color: COLORS.red,
  },
});
