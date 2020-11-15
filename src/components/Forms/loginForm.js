import React from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';

import {responsiveWidth, COLORS} from '@resource';
import {MyTextInput, LinearGradientButton} from '@components';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.submitRef = React.createRef();
  }
  state = {
    email: 'kj@gmail.com',
    password: '1234',
    secureTextEntry: true,
  };

  componentDidUpdate() {
    this.emailRef.current.focus();
  }
  componentDidMount(prevProps, prevState) {
    this.emailRef.current.focus();
  }

  render() {
    // this.focus;

    console.log('reder called');
    const {navigation} = this.props;
    const emailField = {
      mode: 'outlined',
      keyboardType: 'email-address',
      label: 'Email',
      iconName: 'email',
      value: this.state.email,
      onChangeText: (text) => this.setState({email: text}),
      isError: this.state.isError,
      emptyError: 'Email address cannot be empty!!!',
      invalidError: 'Email address is invalid!!!',
      forwardRef: this.emailRef,
      onSubmitEditing: () => this.passwordRef.current.focus(),
    };
    const passwordField = {
      mode: 'outlined',
      label: 'Password',
      iconName: 'lock',
      value: this.state.password,
      onChangeText: (text) => this.setState({password: text}),
      isError: this.state.isError,
      emptyError: 'Password cannot be empty!!!',
      invalidError: 'Password is invalid!!!',
      secureTextEntry: this.state.secureTextEntry,
      maxLength: 10,
      showEyeIcon: true,
      forwardRef: this.passwordRef,
      onSubmitEditing: () => Keyboard.dismiss(),
    };

    const validateCredentials = () => {
      this.state.email === 'kj@gmail.com' && this.state.password === '1234'
        ? navigation.replace('HOME_SCREEN')
        : null;
    };
    return (
      <View style={styles.container}>
        <View style={styles.field_group}>
          <MyTextInput {...emailField} />
        </View>

        <View style={styles.field_group}>
          <MyTextInput {...passwordField} />
        </View>

        <Text
          style={styles.forgotpasswordtext}
          onPress={() => {
            console.log('forgot password clicked');
          }}>
          Forgot password?
        </Text>

        <View>
          <LinearGradientButton
            title="Login"
            {...this.props}
            forwardRef={this.submitRef}
            onPress={() => validateCredentials()}
            height={50}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  field_group: {
    marginTop: responsiveWidth(3),
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  forgotpasswordtext: {
    marginTop: 10,
    color: COLORS.secondary,
    fontWeight: '700',
    textAlign: 'right',
  },
  errorMsg: {
    color: 'red',
  },
});
