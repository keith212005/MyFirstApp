import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {styles} from './style';
import * as Components from '@components';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'kj@gmail.com',
      password: '1234',
      isValidEmail: true,
      isValidPassword: true,
      emailLength: '',
      passwordLength: '',
      secureTextEntry: true,
    };
  }

  handleEmailChange = (text) => {
    // console.log(text);
    let len = text.length.toString();
    this.setState({email: text, emailLength: len});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({isValidEmail: false});

      return false;
    } else {
      this.setState({isValidEmail: true});
    }
  };

  handlePasswordChange = (text) => {
    console.log(text);
    this.setState({password: text});
    let len = text.length.toString();
    this.setState({password: text, passwordLength: len});
  };

  authenticateUser = () => {
    if (this.state.email != 'kj@gmail.com') {
      this.setState({
        isValidEmail: false,
      });
      this.emailTextInput.focus();
    }
    if (this.state.password != '1234') {
      this.setState({
        isValidPassword: false,
      });
      this.passwordTextInput.focus();
    }
    if (this.state.email === 'kj@gmail.com' && this.state.password === '1234') {
      this.props.navigation.replace('HOME_SCREEN');
    }
  };

  togglePassword = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleOnSubmit = () => {
    this.authenticateUser();
  };

  render() {
    let emailLength = this.state.email.length;
    const emailField = {
      mode: 'outlined',
      label: 'Email',
      iconName: 'email',
      value: this.state.email,
      onChangeText: this.handleEmailChange,
    };
    const passwordField = {
      mode: 'outlined',
      label: 'Password',
      iconName: 'lock',
      value: this.state.password,
      onChangeText: this.handlePasswordChange,
      secureTextEntry: this.state.secureTextEntry,
      maxLength: 10,
      showEyeIcon: true,
    };
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>

          <View style={styles.footer}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.field_group}>
                <Components.MyTextInput {...emailField} />
              </View>

              {this.state.isValidEmail ? null : (
                <Text style={styles.errorMsg}>Email address is invalid!</Text>
              )}

              <View style={styles.field_group}>
                <Components.MyTextInput {...passwordField} />
              </View>

              {this.state.isValidPassword ? null : (
                <Text style={styles.errorMsg}>Password Invalid!</Text>
              )}

              <Text
                style={styles.forgotpasswordtext}
                onPress={() => {
                  console.log('forgot password clicked');
                }}>
                Forgot password?
              </Text>

              <View style={{marginTop: 15}}>
                <Components.LinearGradientButton
                  title="Login"
                  onPress={this.handleOnSubmit}
                  height={50}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}
