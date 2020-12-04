import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {Avatar, Accessory} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './style';
import {field_object_signup, signupRefs} from '@constants';
import {commonStyle} from '@resource';
import {isValidEmail, isSameString, isEmpty, isPhoneNumber} from '@utils';
import {colors, responsiveHeight, fontFamily, responsiveWidth} from '@resource';
import * as Components from '@components';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    for (var key in signupRefs) {
      signupRefs[key] = React.createRef();
    }
    this.state = {...field_object_signup};
  }

  // called when we add/edit image Avatar
  toggleAvatar = () => {
    this.setState((state) => ({isVisible: !state.isVisible}));
  };

  // call this function to validate any fieldName
  validate = (fieldName) => {
    switch (fieldName) {
      case 'image':
        if (
          this.state.avatarSource.value ===
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
        ) {
          this.setState((prevState) => ({
            ...prevState,
            avatarSource: {
              ...prevState.avatarSource,
              isError: true,
              error_text: 'Please add image.',
            },
          }));
        }
        break;
      case 'firstname':
        if (isEmpty(this.state.firstname.value)) {
          this.setState((prevState) => ({
            ...prevState,
            firstname: {
              ...prevState.firstname,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        }
        break;
      case 'lastname':
        if (isEmpty(this.state.lastname.value)) {
          this.setState((prevState) => ({
            ...prevState,
            lastname: {
              ...prevState.lastname,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        }
        break;
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
            ...prevState,
            password: {
              ...prevState.password,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        } else {
          if (this.state.password.value.length <= 3) {
            this.setState((prevState) => ({
              ...prevState,
              password: {
                ...prevState.password,
                isError: true,
                error_text:
                  'Password should be minimum 4 characters and maximum 10 characters.',
              },
            }));
          }
        }
        break;
      case 'confirmpassword':
        if (isEmpty(this.state.confirmPassword.value)) {
          this.setState((prevState) => ({
            ...prevState,
            confirmPassword: {
              ...prevState.confirmPassword,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        } else {
          if (
            !isSameString(
              this.state.password.value,
              this.state.confirmPassword.value,
            )
          ) {
            this.setState((prevState) => ({
              ...prevState,
              confirmPassword: {
                ...prevState.confirmPassword,
                isError: true,
                error_text: 'Password and Confirm password does not match!',
              },
            }));
          }
        }
        break;
      case 'phoneno':
        if (isEmpty(this.state.phoneno.value)) {
          this.setState((prevState) => ({
            ...prevState,
            phoneno: {
              ...prevState.phoneno,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        } else {
          if (this.state.phoneno.value.length < 10) {
            this.setState((prevState) => ({
              ...prevState,
              phoneno: {
                ...prevState.phoneno,
                isError: true,
                error_text: 'Phone number should be minimum 10 digits.',
              },
            }));
          } else {
            if (!isPhoneNumber(this.state.phoneno.value)) {
              this.setState((prevState) => ({
                ...prevState,
                phoneno: {
                  ...prevState.phoneno,
                  isError: true,
                  error_text: 'Enter a valid phone number.',
                },
              }));
            }
          }
        }
        break;
      case 'address':
        if (isEmpty(this.state.address.value)) {
          this.setState((prevState) => ({
            ...prevState,
            address: {
              ...prevState.address,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        }
        break;
      case 'gender':
        if (isEmpty(this.state.gender.value)) {
          this.setState((prevState) => ({
            ...prevState,
            gender: {
              ...prevState.gender,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        }
        break;
      case 'dob':
        if (isEmpty) {
          this.setState((prevState) => ({
            ...prevState,
            dob: {
              ...prevState.dob,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        }
        break;
      default:
        break;
    }
  };

  // called when change text in any InputText
  handleOnChangeText = (text, label) => {
    switch (label) {
      case 'firstname':
        {
          this.setState((prevState) => ({
            ...prevState,
            firstname: {
              ...prevState.firstname,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'lastname':
        {
          this.setState((prevState) => ({
            ...prevState,
            lastname: {
              ...prevState.lastname,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'email':
        {
          return this.setState((prevState) => ({
            ...prevState,
            email: {
              ...prevState.email,
              value: text.trim(),
              isError: false,
            },
          }));
        }
        break;
      case 'password':
        {
          this.setState((prevState) => ({
            ...prevState,
            password: {
              ...prevState.password,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'confirmpassword':
        {
          this.setState((prevState) => ({
            ...prevState,
            confirmPassword: {
              ...prevState.confirmPassword,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'phoneno':
        {
          this.setState((prevState) => ({
            ...prevState,
            phoneno: {
              ...prevState.phoneno,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'address':
        {
          this.setState((prevState) => ({
            ...prevState,
            address: {
              ...prevState.address,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'gender':
        {
          Keyboard.dismiss();
          this.setState(
            (prevState) => ({
              ...prevState,
              gender: {
                ...prevState.gender,
                value: text,
                isError: false,
              },
            }),
            () => {
              this.validate('image');
              this.validate('firstname');
              this.validate('lastname');
              this.validate('email');
              this.validate('password');
              this.validate('confirmpassword');
              this.validate('phoneno');
              this.validate('address');
            },
          );
        }
        break;
      case 'dob':
        {
          Keyboard.dismiss();
          this.setState(
            (prevState) => ({
              ...prevState,
              dob: {
                ...prevState.dob,
                value: text.toString(),
                isError: false,
              },
            }),
            () => {
              this.validate('image');
              this.validate('firstname');
              this.validate('lastname');
              this.validate('email');
              this.validate('password');
              this.validate('confirmpassword');
              this.validate('phoneno');
              this.validate('address');
              this.validate('gender');
            },
          );
        }
        break;
    }
  };

  // called when end editing on any InputText
  handleEndEditing = (text) => {
    console.log('handleEndEditing called... ' + text);
  };

  // called when we press register button
  submit = () => {
    if (
      this.state.avatarSource.value !=
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' &&
      !isEmpty(this.state.firstname.value) &&
      !isEmpty(this.state.lastname.value) &&
      !isEmpty(this.state.email.value) &&
      !isEmpty(this.state.password.value) &&
      !isEmpty(this.state.confirmPassword.value) &&
      !isEmpty(this.state.phoneno.value) &&
      !isEmpty(this.state.address.value) &&
      !isEmpty(this.state.gender.value) &&
      !isEmpty(this.state.dob.value)
    ) {
      var personData = {
        avatarSource: this.state.avatarSource.value,
        firstname: this.state.firstname.value,
        lastname: this.state.lastname.value,
        email: this.state.email.value,
        password: this.state.password.value,
        confirmPassword: this.state.confirmPassword.value,
        phoneno: this.state.phoneno.value,
        address: this.state.address.value,
        gender: this.state.gender.value,
        dob: this.state.dob.value,
      };
    } else {
      this.validate('image');
      this.validate('firstname');
      this.validate('lastname');
      this.validate('email');
      this.validate('password');
      this.validate('confirmpassword');
      this.validate('phoneno');
      this.validate('address');
      this.validate('gender');
      this.validate('dob');
    }
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      avatarSource,
      gender,
      phoneno,
      dob,
      address,
      dobVisibility,
      isVisible,
      isError,
    } = this.state;

    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
            duration={1000}>
            <KeyboardAwareScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="always">
              {this.state.isProcessing ? <SimpleActivityIndicator /> : null}

              {isVisible ? (
                <Components.UploadImage
                  isVisible={isVisible}
                  onRequestClose={(value) => this.setState({isVisible: false})}
                  dismiss={() => this.setState({isVisible: false})}
                  onSuccess={(image) => {
                    this.setState((prevState) => ({
                      avatarSource: {
                        ...prevState.avatarSource,
                        value: image,
                        isError: false,
                      },
                      isVisible: false,
                    }));
                  }}
                />
              ) : null}

              <Components.MyAvatarButton
                source={avatarSource.value}
                isError={firstname.isError}
                error_text={firstname.error_text}
                onPress={() => {
                  console.log('image pressed');
                  this.toggleAvatar();
                }}
              />

              <Components.MyTextInput2
                label="First name"
                iconName="user"
                value={firstname.value}
                placeholder="First name"
                isError={firstname.isError}
                error_text={firstname.error_text}
                forwardRef={signupRefs.firstNameRef}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'firstname')
                }
                onSubmitEditing={() => signupRefs.lastNameRef.current.focus()}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => this.validate('image')}
              />

              <Components.MyTextInput2
                label="Last name"
                iconName="user"
                value={lastname.value}
                placeholder="Last name"
                isError={lastname.isError}
                error_text={lastname.error_text}
                forwardRef={signupRefs.lastNameRef}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'lastname')
                }
                onSubmitEditing={() => signupRefs.emailRef.current.focus()}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                }}
              />

              <Components.MyTextInput2
                label="Email"
                iconName="envelope"
                placeholder="Email"
                value={email.value}
                isError={email.isError}
                error_text={email.error_text}
                forwardRef={signupRefs.emailRef}
                onChangeText={(text) => this.handleOnChangeText(text, 'email')}
                onSubmitEditing={() => signupRefs.passwordRef.current.focus()}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                  this.validate('lastname');
                }}
              />

              <Components.MyTextInput2
                label="Password"
                iconName="lock"
                secureTextEntry={true}
                maxLength={10}
                showEyeIcon={true}
                placeholder="Password"
                value={password.value}
                isError={password.isError}
                error_text={password.error_text}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'password')
                }
                forwardRef={signupRefs.passwordRef}
                onSubmitEditing={() =>
                  signupRefs.confirmPasswordRef.current.focus()
                }
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                  this.validate('lastname');
                  this.validate('email');
                }}
              />

              <Components.MyTextInput2
                label="Confirm password"
                iconName="lock"
                secureTextEntry={true}
                maxLength={10}
                showEyeIcon={true}
                placeholder="Confirm Password"
                value={confirmPassword.value}
                isError={confirmPassword.isError}
                error_text={confirmPassword.error_text}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'confirmpassword')
                }
                forwardRef={signupRefs.confirmPasswordRef}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onSubmitEditing={() => signupRefs.phonenoRef.current.focus()}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                  this.validate('lastname');
                  this.validate('email');
                  this.validate('password');
                }}
              />

              <Components.MyTextInput2
                label="Phone"
                iconName="phone"
                keyboardType="phone-pad"
                maxLength={10}
                placeholder="Phone number"
                value={phoneno.value}
                isError={phoneno.isError}
                error_text={phoneno.error_text}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'phoneno')
                }
                forwardRef={signupRefs.phonenoRef}
                onSubmitEditing={() => signupRefs.addressRef.current.focus()}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                  this.validate('lastname');
                  this.validate('email');
                  this.validate('password');
                  this.validate('confirmpassword');
                }}
              />

              <Components.MyTextInput2
                label="Address"
                iconName="map-pin"
                multiline={true}
                placeholder="Address"
                value={address.value}
                isError={address.isError}
                error_text={address.error_text}
                alignItems={'center'}
                onChangeText={(text) =>
                  this.handleOnChangeText(text, 'address')
                }
                forwardRef={signupRefs.addressRef}
                onSubmitEditing={() => {}}
                onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
                onFocus={() => {
                  this.validate('image');
                  this.validate('firstname');
                  this.validate('lastname');
                  this.validate('email');
                  this.validate('password');
                  this.validate('confirmpassword');
                  this.validate('phoneno');
                }}
              />

              <Components.GenderRadioButton
                isError={gender.isError}
                error_text={gender.error_text}
                onSuccess={(value) => this.handleOnChangeText(value, 'gender')}
                forwardRef={signupRefs.genderRef}
              />

              <Components.MyDatePicker
                visible={dob.visible}
                modeType="date"
                value={dob.value}
                isError={dob.isError}
                error_text={dob.error_text}
                onSuccess={(value) => this.handleOnChangeText(value, 'dob')}
                minimumDate={new Date(1980, 0, 1)}
                maximumDate={new Date()}
              />

              <View style={{marginBottom: 20}}>
                <Components.LinearGradientButton
                  title="Register"
                  onPress={() => this.submit()}
                  height={responsiveHeight(14)}
                  fontSize={15}
                  borderRadius={5}
                  fillColor={colors.themeButton}
                  fontColor={colors.white}
                  fontFamily={fontFamily.RobotoBold}
                />
              </View>
            </KeyboardAwareScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}
