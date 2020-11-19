import React from 'react';
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native';

import {RadioButton, TextInput} from 'react-native-paper';
import {Avatar, Accessory} from 'react-native-elements';

import LinearGradientButton from '../Buttons/linearGradientButton';
import GenderRadioButton from '../Buttons/genderRadioButton';
import MyDatePicker from '../Buttons/myDatePicker';
import MyTextInput from '../TextInputs/myTextInput';
import ImageSelectModal from '../Modal/imageSelectModal';

import {COLORS, responsiveHeight} from '@resource';

const avatarsrc =
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

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
    avatarSource: avatarsrc,
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

  authenticateUser = () => {};

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

  toggleAvatar = () => {
    this.setState((state) => ({isVisible: !this.state.isVisible}));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {this.state.isVisible ? (
            <ImageSelectModal
              isVisible={this.state.isVisible}
              onRequestClose={(value) => this.setState({isVisible: false})}
              dismiss={() => this.setState({isVisible: false})}
              onSuccess={(image) => {
                this.setState({isVisible: false, avatarSource: image});
              }}
            />
          ) : null}
          <Avatar
            rounded
            source={{uri: this.state.avatarSource}}
            icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
            containerStyle={{backgroundColor: COLORS.white}}
            size="medium"
            onPress={() => this.toggleAvatar()}>
            <Accessory size={18} onPress={() => this.toggleAvatar()} />
          </Avatar>
        </View>
        <View style={styles.field_group}>
          <MyTextInput
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
          <MyTextInput
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
          <MyTextInput
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
          <MyTextInput
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
          <MyTextInput
            label="Confirm password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={6}
            showEyeIcon={true}
            value={this.state.confirmPassword}
            onChangeText={(text) => {
              this.setState({confirmPassword: text, isError: false});
            }}
            isError={this.state.isError}
            emptyError="Confirm password cannot be empty!!!"
            invalidPassword="Password did not match!!!"
            forwardRef={this.confirmPasswordRef}
            onSubmitEditing={() => {
              if (this.state.password != this.state.confirmPassword) {
                console.log('not equal');
                this.setState({
                  isError: true,
                });
                this.confirmPasswordRef.current.focus();
              } else {
                console.log('wrong');
              }
              Keyboard.dismiss();
            }}
          />
        </View>
        <Text>{this.state.isError ? 'Password did not match' : null}</Text>

        <View style={styles.field_group}>
          <GenderRadioButton
            onSuccess={(value) => this.setState({gender: value})}
            forwardRef={this.genderRef}
          />
        </View>

        <View style={styles.field_group}>
          <MyDatePicker
            modeType="date"
            dob={this.state.dobVisibility}
            dobValue={this.state.dob}
            onSuccess={(text) => {
              this.setState({dob: text.toString()});
              this.phonenoRef.current.focus();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
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
          <MyTextInput
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
          <LinearGradientButton
            title="Register"
            height={responsiveHeight(10)}
            fontSize={responsiveHeight(3.25)}
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
    marginBottom: responsiveHeight(4),
  },
});
