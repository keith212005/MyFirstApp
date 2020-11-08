import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true,
      emailLength: '',
      passwordLength: '',
      secureText: true,
    };
  }

  handleEmailChange = (text) => {
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
      secureText: !this.state.secureText,
    });
  };
  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>
          <View style={styles.footer}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.field_group}>
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={this.state.email}
                  onChangeText={this.handleEmailChange}
                  left={
                    <TextInput.Icon
                      name="email"
                      color={this.state.emailLength > 0 ? '#009387' : 'gray'}
                    />
                  }
                  style={{width: '100%'}}
                  theme={{colors: {primary: '#009387'}, roundness: 5}}
                  ref={(input) => {
                    this.emailTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.passwordTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  selectTextOnFocus
                />
              </View>

              {this.state.isValidEmail ? null : (
                <Text style={styles.errorMsg}>Email address is invalid!</Text>
              )}

              <View style={styles.field_group}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry={this.state.secureText}
                  value={this.state.password}
                  onChangeText={this.handlePasswordChange}
                  left={
                    <TextInput.Icon
                      name="lock"
                      color={this.state.passwordLength > 0 ? '#009387' : 'gray'}
                    />
                  }
                  right={
                    this.state.secureText ? (
                      <TextInput.Icon
                        name="eye-off-outline"
                        onPress={() => this.togglePassword()}
                        color={
                          this.state.passwordLength > 0 ? '#009387' : 'gray'
                        }
                      />
                    ) : (
                      <TextInput.Icon
                        name="eye"
                        onPress={() => this.togglePassword()}
                        color={
                          this.state.passwordLength > 0 ? '#009387' : 'gray'
                        }
                      />
                    )
                  }
                  style={{width: '100%'}}
                  theme={{colors: {primary: '#009387'}, roundness: 5}}
                  ref={(input) => {
                    this.passwordTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.loginButton.focus();
                  }}
                  blurOnSubmit={false}
                />
              </View>

              {this.state.isValidPassword ? null : (
                <Text style={styles.errorMsg}>Password Invalid!</Text>
              )}

              <View style={{marginTop: 15}}>
                <TouchableOpacity onPress={() => this.authenticateUser()}>
                  <Components.linearGradientButton
                    title="Login"
                    ref={(input) => {
                      this.loginButton = input;
                    }}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}
