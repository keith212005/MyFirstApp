import React from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';

import LinearGradientButton from '../Buttons/linearGradientButton';
import MyTextInput from '../TextInputs/myTextInput';
import {responsiveHeight, responsiveWidth, COLORS, FONTFAMILY} from '@resource';
import {field_object_login, validateEmailAddress} from '@constants';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {...field_object_login};
  }

  render() {
    const {email, password, failAlert} = this.state;

    //========================= Validation Functins ==============================
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
        if (!validateEmailAddress(email.value)) {
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
    };
    //============================================================================

    // ========================== Handle onChangeText events =====================
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
    //============================================================================

    // ========================== Handle onEndEditing events =====================
    const handlePasswordEndEditing = (value) => {};
    // ===========================================================================
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
      onEndEditing: () => {},
      onFocus: () => {},
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
      onEndEditing: (e) => {
        // checkPassword();
        validateAllFields();
      },
      onFocus: () => checkEmail(),
    };
    return (
      <>
        <View style={styles.container}>
          <View style={styles.field_group}>
            <MyTextInput {...emailProps} />
          </View>

          <View style={styles.field_group}>
            <MyTextInput {...passwordProps} />
          </View>

          {failAlert ? (
            <Text style={styles.errorStyle}>Login Failed!</Text>
          ) : null}

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

          <TouchableOpacity
            style={[
              styles.signIn,
              {borderColor: '#009387', marginTop: 15, borderWidth: 1},
            ]}
            onPress={() => this.props.navigation.navigate('SIGNUP_SCREEN')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    fontWeight: '600',
    textAlign: 'right',
  },
  errorStyle: {
    color: COLORS.red,
    fontFamily: FONTFAMILY.RobotoItalic,
    textAlign: 'center',
  },
  signIn: {
    height: responsiveHeight(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
