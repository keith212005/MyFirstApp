import React from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';

import {HelperText} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import LinearGradientButton from '../Buttons/linearGradientButton';
import MyTextInput from '../TextInputs/myTextInput';
import SimpleAlertDialog from '../Dialogs/simpleAlertDialog';
import {responsiveHeight, responsiveWidth, COLORS} from '@resource';
import {loginFormStateVars, loginRefs, errorMessage} from '@constants';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  state = {
    email: '',
    password: '',
    isInputValid: true,
    errorMessage: '',
  };

  validateAllFields = () => {
    if (this.state.email.length <= 0) {
      this.setState({
        isInputValid: false,
        errorMessage: errorMessage.required,
      });
    }

    if (this.state.password.length <= 0) {
      this.setState({
        isInputValid: false,
        errorMessage: errorMessage.required,
      });
    }
  };

  render() {
    console.log('login form render called');
    const emailProps = {
      keyboardType: 'email-address',
      label: 'Email',
      iconName: 'email',
      value: this.state.email,
      onChangeText: (text) => this.setState({email: text}),
      forwardRef: this.emailRef,
      onSubmitEditing: () => this.passwordRef.current.focus(),
      isInputValid: this.state.isInputValid,
      errorMessage: this.state.errorMessage,
    };
    const passwordProps = {
      label: 'Password',
      iconName: 'lock',
      value: this.state.password,
      onChangeText: (text) => this.setState({password: text}),
      secureTextEntry: true,
      maxLength: 10,
      showEyeIcon: true,
      forwardRef: this.passwordRef,
      onSubmitEditing: () => Keyboard.dismiss(),
      isInputValid: this.state.isInputValid,
      errorMessage: this.state.errorMessage,
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

          <Text style={styles.forgotpasswordtext}>Forgot password?</Text>

          <View>
            <LinearGradientButton
              title="Sign In"
              {...this.props}
              forwardRef={this.submitRef}
              onPress={() => this.validateAllFields()}
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
  },
  signIn: {
    height: responsiveHeight(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
