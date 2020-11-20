import React from 'react';
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native';

import {RadioButton, TextInput} from 'react-native-paper';
import {Avatar, Accessory} from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';

import LinearGradientButton from '../Buttons/linearGradientButton';
import GenderRadioButton from '../Buttons/genderRadioButton';
import MyDatePicker from '../Buttons/myDatePicker';
import MyTextInput from '../TextInputs/myTextInput';
import ImageSelectModal from '../Modal/imageSelectModal';
import {COLORS, responsiveHeight} from '@resource';
import {signupRefs, personSignupVars} from '@constants';

const avatarsrc =
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    for (var key in signupRefs) {
      signupRefs[key] = React.createRef();
    }
  }

  state = {
    person: personSignupVars,
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

  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
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

  render() {
    const state = this.state;

    const authenticateUser = () => {};

    const toggleAvatar = () => {
      this.setState((state) => ({isVisible: !state.isVisible}));
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {state.isVisible ? (
            <ImageSelectModal
              isVisible={state.isVisible}
              onRequestClose={(value) => this.setState({isVisible: false})}
              dismiss={() => this.setState({isVisible: false})}
              onSuccess={(image) => {
                this.setState({isVisible: false, avatarSource: image});
              }}
            />
          ) : null}

          {DeviceInfo.isTablet() ? (
            <Avatar
              rounded
              source={{uri: state.avatarSource}}
              icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
              containerStyle={{backgroundColor: COLORS.white}}
              size="large"
              onPress={() => this.toggleAvatar()}>
              <Accessory size={26} onPress={() => toggleAvatar()} />
            </Avatar>
          ) : (
            <Avatar
              rounded
              source={{uri: state.avatarSource}}
              icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
              containerStyle={{backgroundColor: COLORS.white}}
              size="medium"
              onPress={() => toggleAvatar()}>
              <Accessory size={18} onPress={() => toggleAvatar()} />
            </Avatar>
          )}
        </View>
        <View style={styles.field_group}>
          <MyTextInput
            label="First name"
            iconName="account"
            value={state.firstname}
            onChangeText={(text) => this.setState({firstname: text})}
            isError={state.isError}
            emptyError="First name cannot be empty!!!"
            invalidError="First name is invalid!!!"
            forwardRef={signupRefs.firstNameRef}
            onSubmitEditing={() => signupRefs.lastNameRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Last name"
            iconName="account"
            value={state.lastname}
            onChangeText={(text) => this.setState({lastname: text})}
            isError={state.isError}
            emptyError="Last name cannot be empty!!!"
            invalidError="Last name is invalid!!!"
            forwardRef={signupRefs.lastNameRef}
            onSubmitEditing={() => signupRefs.emailRef.current.focus()}
          />
        </View>

        <View>
          <MyTextInput
            label="Email"
            iconName="email"
            value={state.email}
            onChangeText={(text) => this.setState({email: text})}
            isError={state.isError}
            emptyError="Email address cannot be empty!!!"
            invalidError="Email address is invalid!!!"
            forwardRef={signupRefs.emailRef}
            onSubmitEditing={() => signupRefs.passwordRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={6}
            showEyeIcon={true}
            value={state.password}
            onChangeText={(text) => this.setState({password: text})}
            isError={state.isError}
            emptyError="Password cannot be empty!!!"
            invalidError="Password is invalid!!!"
            forwardRef={signupRefs.passwordRef}
            onSubmitEditing={() =>
              signupRefs.confirmPasswordRef.current.focus()
            }
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Confirm password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={6}
            showEyeIcon={true}
            value={state.confirmPassword}
            onChangeText={(text) => {
              this.setState({confirmPassword: text, isError: false});
            }}
            isError={state.isError}
            emptyError="Confirm password cannot be empty!!!"
            invalidPassword="Password did not match!!!"
            forwardRef={signupRefs.confirmPasswordRef}
            onSubmitEditing={() => {
              if (state.password != state.confirmPassword) {
                console.log('not equal');
                this.setState({
                  isError: true,
                });
                signupRefs.confirmPasswordRef.current.focus();
              } else {
                console.log('wrong');
              }
              Keyboard.dismiss();
            }}
          />
        </View>
        {/*
        <Text>{this.state.isError ? 'Password did not match' : null}</Text>
        */}
        <View style={styles.field_group}>
          <GenderRadioButton
            onSuccess={(value) => this.setState({gender: value})}
            forwardRef={signupRefs.genderRef}
          />
        </View>

        <View style={styles.field_group}>
          <MyDatePicker
            modeType="date"
            dob={state.dobVisibility}
            dobValue={state.dob}
            onSuccess={(text) => {
              this.setState({dob: text.toString()});
              signupRefs.phonenoRef.current.focus();
            }}
            minimumDate={new Date(1980, 0, 1)}
            maximumDate={new Date()}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Phone"
            iconName="phone"
            keyboardType="phone-pad"
            value={state.phoneno}
            maxLength={10}
            onChangeText={(text) => this.setState({phoneno: text})}
            isError={state.isError}
            emptyError="Phone number cannot be empty!!!"
            invalidError="Phone number is invalid!!!"
            forwardRef={signupRefs.phonenoRef}
            onSubmitEditing={() => signupRefs.addressRef.current.focus()}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Address"
            iconName="pin"
            value={state.address}
            onChangeText={(text) => this.setState({address: text})}
            isError={state.isError}
            emptyError="Address cannot be empty!!!"
            invalidError="Address is invalid!!!"
            forwardRef={signupRefs.addressRef}
            onSubmitEditing={() => Keyboard.dismiss()}
            multiline={true}
          />
        </View>

        <View style={styles.btnContainer}>
          {DeviceInfo.isTablet() ? (
            <LinearGradientButton
              title="Register"
              height={responsiveHeight(8)}
              fontSize={responsiveHeight(2.5)}
              onPress={() => this.authenticateUser()}
            />
          ) : (
            <LinearGradientButton
              title="Register"
              height={responsiveHeight(13)}
              fontSize={responsiveHeight(3.25)}
              onPress={() => this.authenticateUser()}
            />
          )}
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
  btnContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
});
