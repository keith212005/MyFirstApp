import React from 'react';
import {View, Text, StyleSheet, Keyboard, Alert} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './style';
import {actionCreaters} from '@actions';
import {field_object_login} from '@constants';
import * as Utils from '@utils';
import * as Components from '@components';
import * as Resource from '@resource';
import {checkConnectivity} from '@api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {...field_object_login};
  }

  // getting InputText data
  getData = (label) => {
    switch (label) {
      case 'email':
        return {
          iconName: Utils.getIcon(label),
          refs: this.emailRef,
          isError: this.state.email.isError,
          error_text: this.state.email.error_text,
          value: this.state.email.value,
        };
      case 'password':
        return {
          iconName: Utils.getIcon(label),
          refs: this.passwordRef,
          isError: this.state.password.isError,
          error_text: this.state.password.error_text,
          value: this.state.password.value,
          secureTextEntry: true,
          maxLength: 10,
          showEyeIcon: true,
        };
      default:
        break;
    }
  };

  // call this function to validate any field
  validate = (fieldName) => {
    switch (fieldName) {
      case 'email':
        if (Utils.isEmpty(this.state.email.value)) {
          this.setState((prevState) => ({
            email: {
              ...prevState.email,
              isError: true,
              error_text: 'This is required field.',
            },
          }));
        } else {
          if (!Utils.isValidEmail(this.state.email.value)) {
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
        if (Utils.isEmpty(this.state.password.value)) {
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
      Utils.isValidEmail(this.state.email.value)
    ) {
      // this function return promise, if resolve go to home screen else display alert
      checkConnectivity()
        .then(() => {
          this.setState((prevState) => ({
            progressVisible: true,
          }));
          if (
            Utils.isSameString(this.state.email.value, 'Kj@gmail.com') &&
            Utils.isSameString(this.state.password.value, '1234')
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
      case 'password':
        this.validate('email');
        break;
      default:
    }
  };

  handleOnSubmitEditing = (label) => {
    switch (label) {
      case 'email':
        return this.passwordRef.current.focus();
      case 'password':
        Keyboard.dismiss();
        this.submit();
        break;
      default:
        break;
    }
  };

  // custom textinput function
  myTextInput = (props) => {
    const labelInLowerCase = props.label.toLowerCase();
    const data = this.getData(labelInLowerCase);

    return (
      <Components.MyTextInput
        label={props.label}
        iconName={data.iconName}
        placeholder={props.label}
        value={data.value}
        isError={data.isError}
        error_text={data.error_text}
        forwardRef={data.refs}
        secureTextEntry={data.secureTextEntry}
        maxLength={data.maxLength}
        showEyeIcon={data.showEyeIcon}
        onChangeText={(text) => this.handleOnChangeText(text, labelInLowerCase)}
        onSubmitEditing={() => this.handleOnSubmitEditing(labelInLowerCase)}
        onEndEditing={(e) => {}}
        onFocus={() => this.handleOnFocus(labelInLowerCase)}
      />
    );
  };

  handleMyButtonPress = (label) => {
    switch (label) {
      case 'signin':
        this.submit();
        break;
      case 'signup':
        this.props.navigation.navigate('Signup');
        break;
      default:
    }
  };

  myButton = (props) => {
    const labelInLowerCase = Utils.removeSpaces(props.label.toLowerCase());
    return (
      <Components.LinearGradientButton
        title={props.label}
        height={Resource.responsiveHeight(14)}
        fontSize={15}
        fontColor={Resource.colors.primary}
        borderRadius={10}
        borderWidth={1}
        borderColor={
          props.label === 'Sign In'
            ? Resource.colors.white
            : Resource.colors.primary
        }
        fillColor={
          props.label === 'Sign In' ? Resource.colors.themeButton : null
        }
        fontColor={
          props.label === 'Sign In'
            ? Resource.colors.white
            : Resource.colors.primary
        }
        fontFamily={
          props.label === 'Sign In' ? Resource.fontFamily.RobotoBold : null
        }
        onPress={() => this.handleMyButtonPress(labelInLowerCase)}
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
              <Text
                style={[
                  Resource.commonStyle.errorStyle,
                  {textAlign: 'center'},
                ]}>
                {failAlert ? 'Login Failed!' : null}
              </Text>

              {this.myTextInput({label: 'Email'})}
              {this.myTextInput({label: 'Password'})}

              <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

              {this.myButton({label: 'Sign In'})}
              <View style={{marginTop: 10, marginBottom: 50}}>
                {this.myButton({label: 'Sign Up'})}
              </View>
            </KeyboardAwareScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}

const matchStateToProps = (state) => {
  console.log('LoginScreen = ' + JSON.stringify(state));
  return {
    currentCount: state.autoLogin.autoLoginStatus,
    isOnline: state.connectionState.isOnline,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Login);
