import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Keyboard} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {styles} from './style';
import {MyTextInput, LinearGradientButton} from '@components';
import {responsiveHeight} from '@resource';
import {field_object_login} from '@constants';

const validateEmailAddress = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    // console.log('Email is Not Correct');
    // this.setState({email: text});
    return false;
  } else {
    // this.setState({email: text});
    // console.log('Email is Correct');
    return true;
  }
};

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {...field_object_login};
  }

  render() {
    const {email, password} = this.state;

    const checkEmail = () => {
      if (email.value.length == 0) {
        this.setState((prevState) => ({
          email: {
            ...prevState.email,
            isError: true,
            error_text: 'This is required field.',
          },
        }));
      } else {
        const result = validateEmailAddress(email.value);
        if (!result) {
          this.setState((prevState) => ({
            email: {
              ...prevState.email,
              isError: true,
              error_text: 'Invalid Email address!',
            },
          }));
        }
      }
    };

    const checkPassword = () => {
      if (password.value.length == 0) {
        this.setState((prevState) => ({
          password: {
            ...prevState.password,
            isError: true,
            error_text: 'This is required field.',
          },
        }));
      }
    };

    const validateAllFields = () => {
      if (
        email.value.length > 0 &&
        password.value.length > 0 &&
        validateEmailAddress(email.value)
      ) {
        if (email.value === 'Kj@gmail.com' && password.value === '1234') {
          this.props.navigation.replace('HOME_SCREEN');
        } else {
          this.setState((prevState) => ({
            failAlert: true,
          }));
        }
      } else {
        checkEmail();
        checkPassword();
      }

      // validateLogin();
    };

    const handleEmailChange = (text) => {
      this.setState((prevState) => ({
        email: {
          ...prevState.email,
          isError: false,
          value: text,
        },
        failAlert: false,
      }));
    };

    const handlePasswordChange = (text) => {
      this.setState((prevState) => ({
        password: {
          ...prevState.password,
          isError: false,
          value: text,
        },
        failAlert: false,
      }));
    };

    const handleEmailEndEditing = (value) => {
      if (email.value.length == 0) {
        this.setState((prevState) => ({
          email: {
            isError: true,
            error_text: 'Email is required.',
            ...prevState.email,
          },
        }));
      } else {
        const result = validateEmailAddress(email.value);
        if (!result) {
          this.setState((prevState) => ({
            email: {
              isError: true,
              error_text: 'Invalid Email address!',
              ...prevState.email,
            },
          }));
        }
      }
    };

    const handlePasswordEndEditing = (value) => {
      console.log('handleEmailEndEditing called...');
      if (value.length == 0) {
        this.setState((prevState) => ({
          password: {
            ...prevState.password,
            isError: true,
            error_text: 'Password is required.',
          },
        }));
      }
      validateLogin();
    };

    const validateLogin = () => {
      if (
        email.value.length > 0 &&
        password.value.length > 0 &&
        validateEmailAddress(email.value)
      ) {
        if (email.value === 'Kj@gmail.com' && password.value === '1234') {
          this.props.navigation.replace('HOME_SCREEN');
        } else {
          this.setState((prevState) => ({
            failAlert: true,
          }));
        }
      }
    };

    const handleEmailFocus = () => {
      console.log('handle email foucs called...');
    };

    const handlePasswordFocus = () => {
      console.log('handle password foucs called...');
      checkEmail();
    };

    const emailProps = {
      keyboardType: 'email-address',
      label: 'Email',
      iconName: 'email',
      value: email.value,
      isError: email.isError,
      error_text: email.error_text,
      forwardRef: this.emailRef,
      onChangeText: (text) => handleEmailChange(text),
      onSubmitEditing: () => this.passwordRef.current.focus(),
      onEndEditing: (e) => handleEmailEndEditing(e.nativeEvent.text),
      onFocus: () => handleEmailFocus(),
    };

    const passwordProps = {
      label: 'Password',
      iconName: 'lock',
      value: password.value,
      isError: password.isError,
      error_text: password.error_text,
      forwardRef: this.passwordRef,
      secureTextEntry: true,
      maxLength: 10,
      showEyeIcon: true,
      onChangeText: (text) => handlePasswordChange(text),
      onSubmitEditing: () => Keyboard.dismiss(),
      onEndEditing: (e) => handlePasswordEndEditing(e.nativeEvent.text),
      onFocus: () => handlePasswordFocus(),
    };

    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <View style={styles.field_group}>
                <MyTextInput {...emailProps} />
              </View>

              <View style={styles.field_group}>
                <MyTextInput {...passwordProps} />
                {this.state.failAlert ? (
                  <Text style={styles.login_fail_alert}>Login Failed!</Text>
                ) : null}
              </View>

              <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

              <View>
                <LinearGradientButton
                  title="Sign In"
                  {...this.props}
                  forwardRef={this.submitRef}
                  onPress={() => validateAllFields()}
                  height={responsiveHeight(14)}
                  fontSize={15}
                />
              </View>

              <View style={styles.signupBtn}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={() =>
                    this.props.navigation.navigate('SIGNUP_SCREEN')
                  }>
                  <Text>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}
