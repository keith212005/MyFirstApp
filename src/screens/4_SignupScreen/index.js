import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import {RadioButton, TextInput, HelperText} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatarSource: 'https://brandmark.io/logo-rank/random/bp.png',
      gender: 'male',
      phoneno: '',
      dob: 'Birth',
      address: '',
      dobVisibility: false,
      isValidEmail: true,
      doesPasswordMatch: true,
    };
  }

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

  handleEmailChange = (text) => {
    this.validateEmail(text);
  };

  handleConfirmPasswordChange = (text) => {
    this.setState({confirmPassword: text});

    if (this.state.password === text) {
      this.setState({
        doesPasswordMatch: true,
      });
    } else {
      this.setState({
        doesPasswordMatch: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={[styles.headerText, {fontFamily: 'Pacifico-Regular'}]}>
            Sign Up
          </Text>
          <View></View>
        </View>
        <View style={styles.footer}>
          <ScrollView>
            <Image
              style={styles.imageUpload}
              source={{uri: this.state.avatarSource}}
            />
            <Components.simpleDialog
              onSuccess={(image) => this.setState({avatarSource: image})}
            />

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="First name"
                value={this.state.firstname}
                onChangeText={(text) => this.setState({firstname: text})}
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                onSubmitEditing={() => {
                  this.lastnameTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="Last name"
                value={this.state.lastname}
                onChangeText={(text) => this.setState({last: text})}
                left={<TextInput.Icon name="account" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.lastnameTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.emailTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.field_group}>
              <TextInput
                value={this.state.email}
                onChangeText={(text) => this.handleEmailChange(text)}
                mode="outlined"
                label="Email"
                value={this.state.email}
                left={<TextInput.Icon name="email" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.emailTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.passwordTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            {this.state.isValidEmail ? null : (
              <Text style={styles.errorMsg}>
                Plase provide a valid email address
              </Text>
            )}

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                left={<TextInput.Icon name="lock" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.passwordTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.confirmPasswordTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="Confirm Password"
                value={this.state.confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => this.handleConfirmPasswordChange(text)}
                left={<TextInput.Icon name="lock" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.confirmPasswordTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.phonenoTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            {this.state.doesPasswordMatch ? null : (
              <Text style={styles.errorMsg}>Password does not match</Text>
            )}

            <View style={styles.field_group}>
              <Components.genderRadioButton
                gender={this.state.gender}
                onChange={(text) => {
                  this.setState({gender: text});
                  console.log(this.state.gender);
                }}
              />
            </View>

            <View style={styles.field_group}>
              <Components.myDatePicker
                modeType="date"
                visible={this.state.dobVisibility}
                onSuccess={(text) => {
                  this.setState({dob: text.toString()});
                  console.log(text);
                }}
              />
              <Text style={{marginLeft: 20, fontSize: 16}}>
                {this.state.dob}
              </Text>
            </View>

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="Phone number"
                value={this.state.phoneno}
                onChangeText={(text) => this.setState({phoneno: text})}
                keyboardType={'numeric'}
                left={<TextInput.Icon name="phone" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.phonenoTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.addressTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.field_group}>
              <TextInput
                mode="outlined"
                label="Address"
                value={this.state.address}
                onChangeText={(text) => this.setState({address: text})}
                left={<TextInput.Icon name="pin" />}
                style={styles.input}
                theme={{colors: {primary: '#009387'}}}
                ref={(input) => {
                  this.addressTextInput = input;
                }}
              />
            </View>

            <TouchableOpacity onPress={() => this.authenticateUser()}>
              <Components.linearGradientButton title="Register" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
