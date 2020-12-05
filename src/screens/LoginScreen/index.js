import React from 'react';
import {View, Text, StyleSheet, Keyboard, Alert} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  responsiveHeight,
  responsiveWidth,
  colors,
  fontFamily,
  icon,
  commonStyle,
} from '@resource';
import {styles} from './style';
import {actionCreaters} from '@actions';
import {field_object_login} from '@constants';
import {isValidEmail, isSameString, isEmpty} from '@utils';
import * as Components from '@components';
import {checkConnectivity} from '@api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {...field_object_login};
  }

  // call this function to validate any field
  validate = (fieldName) => {
    switch (fieldName) {
      case 'email':
        if (isEmpty(this.state.email.value)) {
          this.setState((prevState) => ({
            email: {
              ...prevState.email,
              isError: true,
              error_text: 'This is required field.',
            },
          }));
        } else {
          if (!isValidEmail(this.state.email.value)) {
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
        if (isEmpty(this.state.password.value)) {
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

  // called when Sign In is pressed
  submit = () => {
    Keyboard.dismiss();
    if (
      this.state.email.value.length > 0 &&
      this.state.password.value.length > 0 &&
      isValidEmail(this.state.email.value)
    ) {
      // this function return promise, if resolve go to home screen else display alert
      checkConnectivity()
        .then(() => {
          this.setState((prevState) => ({
            progressVisible: true,
          }));
          if (
            isSameString(this.state.email.value, 'Kj@gmail.com') &&
            isSameString(this.state.password.value, '1234')
          ) {
            this.props.addAutoLogin();
            this.props.navigation.replace('DrawerNavigator');
          } else {
            this.setState((prevState) => ({
              ...prevState,
              failAlert: true,
              progressVisible: false,
            }));
          }
        })
        .catch((error) => {
          Alert.alert('Error', error);
        });
    } else {
      this.validate('email');
      this.validate('password');
    }
  };

  // called when change text in any InputText
  handleOnChangeText = (text, label) => {
    switch (label) {
      case 'email':
        return this.setState((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            isError: false,
            value: text.trim(),
          },
          failAlert: false,
        }));
      case 'password':
        return this.setState((prevState) => ({
          password: {
            ...prevState.password,
            isError: false,
            value: text,
          },
          failAlert: false,
        }));
    }
  };

  handleOnFocus = (label) => {
    switch (label) {
      case 'Password':
        this.validate('email');
        break;
      default:
    }
  };

  handleOnSubmitEditing = (label) => {
    switch (label) {
      case 'Email':
        return this.passwordRef.current.focus();
      case 'Password':
        return Keyboard.dismiss();
      default:
        break;
    }
  };

  // custom textinput function
  myTextInput = (props) => {
    const {email, password, failAlert, progressVisible} = this.state;

    return (
      <Components.MyTextInput
        label={props.label}
        iconName={props.icon}
        placeholder={props.label}
        value={props.label.toLowerCase().value}
        isError={props.label === 'Email' ? email.isError : password.isError}
        error_text={
          props.label === 'Email' ? email.error_text : password.error_text
        }
        forwardRef={props.label === 'Email' ? this.emailRef : this.passwordRef}
        secureTextEntry={props.label === 'Password' ? true : false}
        maxLength={props.label === 'Password' ? 10 : null}
        showEyeIcon={props.label === 'Password' ? true : false}
        onChangeText={(text) =>
          this.handleOnChangeText(text, props.label.toLowerCase())
        }
        onSubmitEditing={() => this.handleOnSubmitEditing(props.label)}
        onEndEditing={(e) => {}}
        onFocus={() => this.handleOnFocus(props.label)}
      />
    );
  };

  render() {
    const {email, password, failAlert, progressVisible} = this.state;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>
          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
            duration={1000}>
            <KeyboardAwareScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="always">
              {progressVisible ? <Components.SimpleActivityIndicator /> : null}
              <Text style={[commonStyle.errorStyle, {textAlign: 'center'}]}>
                {failAlert ? 'Login Failed!' : null}
              </Text>

              {this.myTextInput({label: 'Email', icon: icon.envelope})}
              {this.myTextInput({label: 'Password', icon: icon.lock})}

              <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

              <Components.LinearGradientButton
                title="Sign In"
                onPress={() => this.submit()}
                height={responsiveHeight(14)}
                fontSize={15}
                borderRadius={10}
                fillColor={colors.themeButton}
                fontColor={colors.white}
                fontFamily={fontFamily.RobotoBold}
              />

              <View style={{marginTop: 10, marginBottom: 50}}>
                <Components.LinearGradientButton
                  title="Sign Up"
                  height={responsiveHeight(14)}
                  fontSize={15}
                  fontColor={colors.primary}
                  borderRadius={10}
                  borderWidth={1}
                  borderColor={colors.primary}
                  onPress={() => this.props.navigation.navigate('Signup')}
                />
              </View>
            </KeyboardAwareScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}

const matchStateToProps = (state) => {
  console.log(JSON.stringify(state));
  return {
    currentCount: state.autoLogin.autoLoginStatus,
    isOnline: state.connectionStatus.isOnline,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Login);
