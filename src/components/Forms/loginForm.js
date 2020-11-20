import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import {useForm, Controller} from 'react-hook-form';

import LinearGradientButton from '../Buttons/linearGradientButton';
import MyTextInput from '../TextInputs/myTextInput';
import SimpleAlertDialog from '../Dialogs/simpleAlertDialog';
import {responsiveHeight, responsiveWidth, COLORS} from '@resource';
import {loginFormStateVars, loginRefs} from '@constants';

export default LoginForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const onSubmit = (data) => console.log(data);

  console.log('errors', errors);
  return (
    <View>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{required: 'This field is required.'}}
        onFocus={() => {
          emailInputRef.current.focus();
        }}
        render={(props) => (
          <MyTextInput
            {...props}
            label="Email"
            iconName="email"
            keyboardType="email-address"
            onBlur={props.onBlur}
            onChangeText={(value) => props.onChange(value)}
            value={props.value}
            inputRef={emailInputRef}
          />
        )}
      />
      {errors.email && <Text style={styles.errorStyle}>This is required.</Text>}

      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{required: 'This field is required.'}}
        onFocus={() => {
          passwordInputRef.current.focus();
        }}
        render={(props) => (
          <MyTextInput
            {...props}
            label="Password"
            secureTextEntry={true}
            maxLength={10}
            showEyeIcon={true}
            iconName="lock"
            onBlur={props.onBlur}
            onChangeText={(value) => props.onChange(value)}
            value={props.value}
            inputRef={passwordInputRef}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorStyle}>Password is required.</Text>
      )}

      <View style={styles.btnContainer}>
        <LinearGradientButton
          title="Login"
          onPress={handleSubmit(onSubmit)}
          height={responsiveHeight(14)}
          fontSize={15}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    marginTop: 10,
  },
  errorStyle: {
    color: COLORS.red,
  },
});

// import React from 'react';
// import {View, Text, StyleSheet, Keyboard} from 'react-native';
//
// import DeviceInfo from 'react-native-device-info';
// import {HelperText} from 'react-native-paper';
//
// import LinearGradientButton from '../Buttons/linearGradientButton';
// import MyTextInput from '../TextInputs/myTextInput';
// import SimpleAlertDialog from '../Dialogs/simpleAlertDialog';
// import {responsiveHeight, responsiveWidth, COLORS} from '@resource';
// import {loginFormStateVars, loginRefs} from '@constants';
//
// export default class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.emailRef = React.createRef();
//     this.passwordRef = React.createRef();
//     console.log(DeviceInfo.isTablet());
//   }
//   state = {
//     email: '',
//     password: '',
//     emailErr: '',
//     passwordErr: '',
//     showAlert: false,
//     alertTitle: 'title',
//     alertContent: 'content',
//     hasErrors: false,
//     errMsg: '',
//   };
//
//   handleOnFocus = () => {
//     // check for empty validation
//     let x = this.state.email.length;
//     console.log(x);
//     if (this.state.email.length <= 0) {
//       this.setState({
//         hasErrors: true,
//         errMsg: 'This field has to be filled',
//       });
//     }
//   };
//   handleOnChangeText = (text) => {
//     this.setState({email: text});
//   };
//
//   render() {
//     const state = this.state.person;
//     const emailProps = {
//       keyboardType: 'email-address',
//       label: 'Email',
//       iconName: 'email',
//       value: this.state.email,
//       onChangeText: (text) => this.handleOnChangeText(text),
//       emptyError: 'Email address cannot be empty!!!',
//       invalidError: 'Email address is invalid!!!',
//       ref: (text) => (this.emailRef = text),
//       onSubmitEditing: () => this.passwordRef.current.focus(),
//       onFocus: () => this.handleOnFocus(),
//     };
//     const passwordProps = {
//       label: 'Password',
//       iconName: 'lock',
//       value: this.state.password,
//       onChangeText: (text) => this.setState({password: text}),
//       emptyError: 'Password cannot be empty!!!',
//       invalidError: 'Password is invalid!!!',
//       secureTextEntry: true,
//       maxLength: 10,
//       showEyeIcon: true,
//       forwardRef: this.passwordRef,
//       onSubmitEditing: () => Keyboard.dismiss(),
//       onFocus: (text) => console.log(text),
//     };
//     const validateCredentials = () => {
//       console.log('validateCredentials clicked...');
//
//       if (this.state.email.length <= 0) {
//         this.setState({
//           showAlert: true,
//           alertTitle: 'Required !',
//           alertContent: 'Email cannot be empty.',
//         });
//         // this.emailRef.current.focus();
//       } else if (state.password.length <= 0) {
//         this.setState({
//           showAlert: true,
//           alertTitle: 'Required !',
//           alertContent: 'Passoword cannot be empty.',
//         });
//         this.passwordRef.current.focus();
//         this.setState({passwordErr: 'Password cannot be empty!!!'});
//       }
//
//       if (this.state.email.length > 0 && this.state.password.length > 0) {
//         if (this.state.email === 'Kj@gmail.com') {
//           if (this.state.password === '1234') {
//             this.props.navigation.replace('HOME_SCREEN');
//           } else {
//             this.setState({
//               showAlert: true,
//               alertTitle: 'Invalid password !',
//               alertContent: 'Please enter valid password',
//             });
//             this.passwordRef.current.focus();
//           }
//         } else {
//           this.setState({
//             showAlert: true,
//             alertTitle: 'Invalid Email !',
//             alertContent: 'Plese enter valid email address',
//           });
//           this.emailRef.current.focus();
//         }
//       }
//     };
//
//     const handleConfirm = () => {
//       console.log('confirm presed');
//       this.setState({showAlert: false});
//     };
//
//     return (
//       <>
//         <View style={styles.container}>
//           <View style={styles.field_group}>
//             <MyTextInput {...emailProps} />
//             {this.state.hasErrors ? (
//               <HelperText type="error" visible={this.state.hasErrors}>
//                 {this.state.errMsg}
//               </HelperText>
//             ) : null}
//           </View>
//
//           <View style={styles.field_group}>
//             <MyTextInput {...passwordProps} />
//           </View>
//
//           <Text style={styles.forgotpasswordtext}>Forgot password?</Text>
//
//           <View>
//             <LinearGradientButton
//               title="Login"
//               {...this.props}
//               forwardRef={this.submitRef}
//               onPress={() => validateCredentials()}
//               height={responsiveHeight(14)}
//               fontSize={15}
//             />
//           </View>
//         </View>
//
//         <SimpleAlertDialog
//           title={this.state.alertTitle}
//           content={this.state.alertContent}
//           showAlert={this.state.showAlert}
//           onConfirmPressed={() => handleConfirm()}
//         />
//       </>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   field_group: {
//     marginTop: responsiveWidth(3),
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.white,
//   },
//   forgotpasswordtext: {
//     marginTop: responsiveHeight(2),
//     marginBottom: responsiveHeight(2),
//     color: COLORS.primary,
//     fontWeight: '700',
//     textAlign: 'right',
//   },
// });
