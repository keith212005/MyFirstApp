import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true,
    };
  }

  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      this.setState({email: text, isValidEmail: false});
      return false;
    } else {
      this.setState({email: text, isValidEmail: true});
      console.log('Email is Correct');
    }
  };

  handleEmailChange = ({text}) => {
    console.log(text);
    this.setState({email: text});
    this.validateEmail(text);
  };

  handlePasswordChange = (inputText) => {
    console.log(inputText);
    this.setState({password: inputText.text});
  };

  authenticateUser = () => {
    if (this.state.email != 'kj@gmail.com') {
      this.setState({
        isValidEmail: false,
      });
    }
    if (this.state.password != '1234') {
      this.setState({
        isValidPassword: false,
      });
    }
    if (this.state.email === 'kj@gmail.com' && this.state.password === '1234') {
      this.props.navigation.replace('HOME_SCREEN');
    }
  };

  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.field_group}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <Components.textInput
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </View>

            {this.state.isValidEmail ? null : (
              <Text style={styles.errorMsg}>
                Plase provide a valid email address
              </Text>
            )}

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.field_group}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <Components.textInput
                placeholder="password"
                secureTextEntry={true}
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </View>
            {this.state.isValidPassword ? null : (
              <Text style={styles.errorMsg}>
                Plase provide a valid password
              </Text>
            )}

            <TouchableOpacity onPress={() => this.authenticateUser()}>
              <Components.linearGradientButton title="Login" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
