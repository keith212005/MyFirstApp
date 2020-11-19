import React from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';

import LinearGradientButton from '../Buttons/linearGradientButton';
import MyTextInput from '../TextInputs/myTextInput';
import SimpleAlertDialog from '../Dialogs/simpleAlertDialog';
import {responsiveHeight, responsiveWidth, COLORS} from '@resource';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  state = {
    email: 'Kj@gmail.com',
    password: '',
    emailErr: '',
    passwordErr: '',
    showAlert: false,
    alertTitle: 'title',
    alertContent: 'content',
  };
  emailProps = {
    mode: 'outlined',
    keyboardType: 'email-address',
    label: 'Email',
    iconName: 'email',
    value: this.state.email,
    onChangeText: (text) => this.setState({email: text}),
    emptyError: 'Email address cannot be empty!!!',
    invalidError: 'Email address is invalid!!!',
    forwardRef: this.emailRef,
    onSubmitEditing: () => this.passwordRef.current.focus(),
  };
  passwordProps = {
    mode: 'outlined',
    label: 'Password',
    iconName: 'lock',
    value: this.state.password,
    onChangeText: (text) => this.setState({password: text}),
    emptyError: 'Password cannot be empty!!!',
    invalidError: 'Password is invalid!!!',
    secureTextEntry: true,
    maxLength: 10,
    showEyeIcon: true,
    forwardRef: this.passwordRef,
    onSubmitEditing: () => Keyboard.dismiss(),
  };

  render() {
    const validateCredentials = () => {
      console.log('validateCredentials clicked...');

      if (this.state.email.length <= 0) {
        this.setState({
          showAlert: true,
          alertTitle: 'Required !',
          alertContent: 'Email cannot be empty.',
        });
        // this.emailRef.current.focus();
      } else if (this.state.password.length <= 0) {
        this.setState({
          showAlert: true,
          alertTitle: 'Required !',
          alertContent: 'Passoword cannot be empty.',
        });
        // this.passwordRef.current.focus();
        this.setState({passwordErr: 'Password cannot be empty!!!'});
      }

      if (this.state.email.length > 0 && this.state.password.length > 0) {
        if (this.state.email === 'Kj@gmail.com') {
          if (this.state.password === '1234') {
            this.props.navigation.replace('HOME_SCREEN');
          } else {
            this.setState({
              showAlert: true,
              alertTitle: 'Invalid password !',
              alertContent: 'Please enter valid password',
            });
            this.passwordRef.current.focus();
          }
        } else {
          this.setState({
            showAlert: true,
            alertTitle: 'Invalid Email !',
            alertContent: 'Plese enter valid email address',
          });
          this.emailRef.current.focus();
        }
      }
    };

    const handleConfirm = () => {
      console.log('confirm presed');
      this.setState({showAlert: false});
    };

    return (
      <>
        <View style={styles.container}>
          <View style={styles.field_group}>
            <MyTextInput {...this.emailProps} />
          </View>

          <View style={styles.field_group}>
            <MyTextInput {...this.passwordProps} />
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
              height={responsiveHeight(10)}
            />
          </View>
        </View>

        <SimpleAlertDialog
          title={this.state.alertTitle}
          content={this.state.alertContent}
          showAlert={this.state.showAlert}
          onConfirmPressed={() => handleConfirm()}
        />
      </>
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
    borderBottomColor: COLORS.white,
  },
  forgotpasswordtext: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: COLORS.primary,
    fontWeight: '700',
    textAlign: 'right',
  },
});
