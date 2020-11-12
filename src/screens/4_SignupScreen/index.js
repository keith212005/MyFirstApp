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

import {RadioButton, TextInput, HelperText} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Avatar, Accessory} from 'react-native-elements';

import {styles} from './style';
import * as Components from '@components';
import {color} from '@resource';

export default class SignupScreen extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatarSource:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    gender: 'male',
    phoneno: '',
    dob: 'Birth',
    address: '',
    dobVisibility: false,
    isValidEmail: true,
    doesPasswordMatch: true,
    isVisible: false,
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

  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({isValidEmail: false});
      return false;
    } else {
      this.setState({isValidEmail: true});
    }
  };

  handleEmailChange = (text) => {
    this.setState({
      email: text,
    });
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

  handleFocus = () => {
    this.setState({iconColor: 'red'});
  };

  toggleShow = () => {
    this.setState((state) => ({isVisible: !this.state.isVisible}));
  };

  handleOnRequestClose = (value) => {
    this.setState((isVisible: false));
  };

  hideModal = () => this.setState({isVisible: false});

  render() {
    return (
      <>
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              {this.state.isVisible ? (
                <View style={{height: 0, width: 0}}>
                  <Components.ImageSelectModal
                    isVisible={this.state.isVisible}
                    onRequestClose={(value) =>
                      this.setState({isVisible: false})
                    }
                    dismiss={this.hideModal}
                    onSuccess={(image) => {
                      this.setState({isVisible: false, avatarSource: image});
                    }}
                  />
                </View>
              ) : null}
              <Avatar
                rounded
                source={{uri: this.state.avatarSource}}
                icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
                containerStyle={{backgroundColor: color.white}}
                size="large"
                onPress={() => this.toggleShow()}>
                <Accessory size={18} onPress={() => this.toggleShow()} />
              </Avatar>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={styles.headerText}>Sign Up</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.field_group}>
                <TextInput
                  mode="outlined"
                  label="First name"
                  value={this.state.firstname}
                  onChangeText={(text) => this.setState({firstname: text})}
                  left={
                    <TextInput.Icon
                      name="account"
                      color={'gray'}
                      theme={{colors: {primary: '#009387'}}}
                    />
                  }
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
                  onChangeText={(text) => this.setState({lastname: text})}
                  left={<TextInput.Icon name="account" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
                  ref={(input) => {
                    this.lastnameTextInput = input;
                  }}
                  onSubmitEditing={() => {
                    this.emailTextInput.focus();
                  }}
                  blurOnSubmit={false}
                />
              </View>

              <View>
                <TextInput
                  value={this.state.email}
                  onChangeText={(text) => this.handleEmailChange(text)}
                  mode="outlined"
                  label="Email"
                  value={this.state.email}
                  left={<TextInput.Icon name="email" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
                <Text style={styles.errorMsg}>Email address is invalid!</Text>
              )}

              <View style={styles.field_group}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                  left={<TextInput.Icon name="lock" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
                  onChangeText={(text) =>
                    this.handleConfirmPasswordChange(text)
                  }
                  onFocus={() => this.setState({iconColor: '#009387'})}
                  onBlur={() => this.setState({iconColor: 'gray'})}
                  left={<TextInput.Icon name="lock" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
                  onFocus={() => this.setState({iconColor: '#009387'})}
                  onBlur={() => this.setState({iconColor: 'gray'})}
                  keyboardType={'numeric'}
                  left={<TextInput.Icon name="phone" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
                  onFocus={() => this.setState({iconColor: '#009387'})}
                  onBlur={() => this.setState({iconColor: 'gray'})}
                  left={<TextInput.Icon name="pin" color={'gray'} />}
                  style={styles.input}
                  theme={{colors: {primary: '#009387'}, roundness: 15}}
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
      </>
    );
  }
}
