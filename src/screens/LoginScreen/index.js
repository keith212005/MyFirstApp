import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';

import {styles} from './style';
import {actionCreaters} from '@actions';
import {field_object_login} from '@constants';
import {commonStyle} from '@resource';
import {isValidEmail, isSameString, isEmpty} from '@utils';
import * as Components from '@components';
import {responsiveHeight, responsiveWidth, colors, fontFamily} from '@resource';
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
    }
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
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              {progressVisible ? <Components.SimpleActivityIndicator /> : null}
              <Text style={[commonStyle.errorStyle, {textAlign: 'center'}]}>
                {failAlert ? 'Login Failed!' : null}
              </Text>

              <Components.MyTextInput2
                keyboardType={'email-address'}
                label={'Email'}
                iconName={'envelope_96px'}
                placeholder="Email"
                value={email.value}
                isError={email.isError}
                error_text={email.error_text}
                forwardRef={this.emailRef}
                onChangeText={(text) => this.handleOnChangeText(text, 'email')}
                onSubmitEditing={() => this.passwordRef.current.focus()}
                onEndEditing={() => {}}
                onFocus={() => {}}
              />

              <Components.MyTextInput2
                label={'Password'}
                iconName={'lock_96px'}
                placeholder="Password"
                value={password.value}
                isError={password.isError}
                error_text={password.error_text}
                forwardRef={this.passwordRef}
                secureTextEntry={true}
                maxLength={10}
                showEyeIcon={true}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'password')
                }
                onSubmitEditing={() => Keyboard.dismiss()}
                onEndEditing={(e) => {}}
                onFocus={() => this.validate('email')}
              />

              <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

              <Components.LinearGradientButton
                title="Sign In"
                forwardRef={this.submitRef}
                onPress={() => this.submit()}
                height={responsiveHeight(14)}
                fontSize={15}
                borderRadius={10}
                fillColor={colors.themeButton}
                fontColor={colors.white}
                fontFamily={fontFamily.RobotoBold}
              />

              <View style={{marginTop: 10}}>
                <Components.LinearGradientButton
                  title="Sign Up"
                  forwardRef={this.submitRef}
                  height={responsiveHeight(14)}
                  fontSize={15}
                  fontColor={colors.primary}
                  borderRadius={10}
                  borderWidth={1}
                  borderColor={colors.primary}
                  onPress={() => this.props.navigation.navigate('Signup')}
                />
              </View>
            </ScrollView>
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
