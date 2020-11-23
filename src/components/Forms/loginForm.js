import React from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';

import {
  field_object_login,
  validateEmailAddress,
  commonStyle,
} from '@constants';
import LinearGradientButton from '../Buttons/linearGradientButton';
import MyTextInput from '../TextInputs/myTextInput';
import SimpleActivityIndicator from '../ActivityIndicator/simpleActivityIndicator';
import {responsiveHeight, responsiveWidth, colors, fontFamily} from '@resource';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {...field_object_login};
  }

  render() {
    const {email, password, failAlert, progressVisible} = this.state;

    // call this function to validate any field
    const validateField = (fieldName) => {
      switch (fieldName) {
        case 'email':
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
          break;
        case 'password':
          if (password.value.length == 0) {
            this.setState((prevState) => ({
              password: {
                ...prevState.password,
                isError: true,
                error_text: 'This is required field.',
              },
            }));
          }
          break;
        default:
          break;
      }
    };

    // called after successful registration of user
    const resetForm = () => {};

    // called when Sign In is pressed
    const submit = () => {
      if (
        email.value.length > 0 &&
        password.value.length > 0 &&
        validateEmailAddress(email.value)
      ) {
        this.setState((prevState) => ({
          progressVisible: true,
        }));

        if (email.value === 'Kj@gmail.com' && password.value === '1234') {
          this.props.navigation.replace('DrawerNavigator');
        } else {
          this.setState({
            progressVisible: false,
            failAlert: true,
          });
        }
      } else {
        validateField('email');
        validateField('password');
      }
    };

    // called when change text in any InputText
    const handleOnChangeText = (text, label) => {
      switch (label) {
        case 'email': {
          return this.setState((prevState) => ({
            email: {
              ...prevState.email,
              isError: false,
              value: text,
            },
            failAlert: false,
          }));
        }
        case 'password': {
          return this.setState((prevState) => ({
            password: {
              ...prevState.password,
              isError: false,
              value: text,
            },
            failAlert: false,
          }));
        }
        default: {
        }
      }
    };

    const emailProps = {
      keyboardType: 'email-address',
      label: 'Email',
      iconName: 'email',
      value: email.value,
      isError: email.isError,
      error_text: email.error_text,
      forwardRef: this.emailRef,
      onChangeText: (text) => handleOnChangeText(text, 'email'),
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
      onChangeText: (text) => handleOnChangeText(text, 'password'),
      onSubmitEditing: () => Keyboard.dismiss(),
      onEndEditing: (e) => {
        submit();
      },
      onFocus: () => validateField('email'),
    };

    return (
      <>
        {progressVisible ? <SimpleActivityIndicator /> : null}
        <View style={commonStyle.containerFlex1}>
          <View style={commonStyle.field_group}>
            <MyTextInput {...emailProps} />
          </View>

          <View style={commonStyle.field_group}>
            <MyTextInput {...passwordProps} />
          </View>

          {failAlert ? (
            <Text style={[commonStyle.errorStyle, {textAlign: 'center'}]}>
              Login Failed!
            </Text>
          ) : null}

          <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

          <View>
            <LinearGradientButton
              title="Sign In"
              forwardRef={this.submitRef}
              onPress={() => submit()}
              height={responsiveHeight(14)}
              fontSize={15}
            />
          </View>

          <View style={styles.signupBtnContainer}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {borderColor: colors.primary, marginTop: 15, borderWidth: 1},
              ]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={commonStyle.primaryText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  forgotpasswordtext: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'right',
  },
  signIn: {
    height: responsiveHeight(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signupBtnContainer: {
    marginBottom: 50,
  },
});
