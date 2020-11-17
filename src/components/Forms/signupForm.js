import React from 'react';
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native';

import {RadioButton, TextInput} from 'react-native-paper';
import {Avatar, Accessory} from 'react-native-elements';

import * as Components from '@components';

import {COLORS} from '@resource';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.dobRef = React.createRef();
    this.phonenoRef = React.createRef();
    this.addressRef = React.createRef();
  }
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatarSource:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    gender: '',
    phoneno: '',
    dob: 'Date of birth',
    address: '',
    dobVisibility: false,
    isValidEmail: true,
    doesPasswordMatch: true,
    isVisible: false,
    isError: false,
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

  toggleShow = () => {
    this.setState((state) => ({isVisible: !this.state.isVisible}));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {this.state.isVisible ? (
            <View style={{height: 0, width: 0}}>
              <Components.ImageSelectModal
                isVisible={this.state.isVisible}
                onRequestClose={(value) => this.setState({isVisible: false})}
                dismiss={() => this.setState({isVisible: false})}
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
            containerStyle={{backgroundColor: COLORS.white}}
            size="medium"
            onPress={() => this.toggleShow()}>
            <Accessory size={18} onPress={() => this.toggleShow()} />
          </Avatar>
        </View>
        <View style={styles.field_group}>
          <Components.MyTextInput
            label="First name"
            iconName="account"
            value={this.state.firstname}
            onChangeText={(text) => this.setState({firstname: text})}
            isError={this.state.isError}
            emptyError="First name cannot be empty!!!"
            invalidError="First name is invalid!!!"
            forwardRef={this.firstNameRef}
            onSubmitEditing={() => this.lastNameRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.MyTextInput
            label="Last name"
            iconName="account"
            value={this.state.lastname}
            onChangeText={(text) => this.setState({lastname: text})}
            isError={this.state.isError}
            emptyError="Last name cannot be empty!!!"
            invalidError="Last name is invalid!!!"
            forwardRef={this.lastNameRef}
            onSubmitEditing={() => this.emailRef.current.focus()}
          />
        </View>

        <View>
          <Components.MyTextInput
            label="Email"
            iconName="email"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            isError={this.state.isError}
            emptyError="Email address cannot be empty!!!"
            invalidError="Email address is invalid!!!"
            forwardRef={this.emailRef}
            onSubmitEditing={() => this.passwordRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.MyTextInput
            label="Password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={6}
            showEyeIcon={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            isError={this.state.isError}
            emptyError="Password cannot be empty!!!"
            invalidError="Password is invalid!!!"
            forwardRef={this.passwordRef}
            onSubmitEditing={() => this.confirmPasswordRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.MyTextInput
            label="Confirm password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={6}
            showEyeIcon={true}
            value={this.state.confirmPassword}
            onChangeText={(text) => this.setState({confirmPassword: text})}
            isError={this.state.isError}
            emptyError="Confirm password cannot be empty!!!"
            invalidError="Confirm password is invalid!!!"
            forwardRef={this.confirmPasswordRef}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.GenderRadioButton
            onSuccess={(value) => this.setState({gender: value})}
            forwardRef={this.genderRef}
            onSubmitEditing={() => this.dobRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.myDatePicker
            modeType="date"
            dob={this.state.dobVisibility}
            dobValue={this.state.dob}
            onSuccess={(text) => this.setState({dob: text.toString()})}
          />
        </View>

        <View style={styles.field_group}>
          <Components.MyTextInput
            label="Phone"
            iconName="phone"
            keyboardType="phone-pad"
            value={this.state.phoneno}
            maxLength={10}
            onChangeText={(text) => this.setState({phoneno: text})}
            isError={this.state.isError}
            emptyError="Phone number cannot be empty!!!"
            invalidError="Phone number is invalid!!!"
            forwardRef={this.phonenoRef}
            onSubmitEditing={() => this.addressRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <Components.MyTextInput
            label="Address"
            iconName="pin"
            value={this.state.address}
            onChangeText={(text) => this.setState({address: text})}
            isError={this.state.isError}
            emptyError="Address cannot be empty!!!"
            invalidError="Address is invalid!!!"
            forwardRef={this.addressRef}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        <View style={{marginTop: 10, marginBottom: 30}}>
          <Components.LinearGradientButton
            title="Register"
            height={50}
            onPress={() => this.authenticateUser()}
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
  imageContainer: {
    flex: 1,
    marginBottom: 10,
  },
});
