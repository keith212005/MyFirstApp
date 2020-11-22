import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

import {
  field_object_signup,
  signupRefs,
  validateEmailAddress,
} from '@constants';
import {COLORS, responsiveHeight, FONTFAMILY} from '@resource';
import LinearGradientButton from '../Buttons/linearGradientButton';
import GenderRadioButton from '../Buttons/genderRadioButton';
import MyDatePicker from '../Buttons/myDatePicker';
import MyTextInput from '../TextInputs/myTextInput';
import ImageSelectModal from '../Modal/imageSelectModal';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    for (var key in signupRefs) {
      signupRefs[key] = React.createRef();
    }
    this.state = {...field_object_signup};
  }

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
      isValidEmail,
      doesPasswordMatch,
      isVisible,
      isError,
    } = this.state;

    const toggleAvatar = () => {
      this.setState((state) => ({isVisible: !state.isVisible}));
    };

    //========================= Validation Functinos ============================
    const checkImage = () => {
      if (
        avatarSource.value ===
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
    };
    const checkFname = () => {
      if (firstname.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          firstname: {
            ...prevState.firstname,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      }
    };
    const checkLname = () => {
      if (lastname.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          lastname: {
            ...prevState.lastname,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      }
    };
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
        const result = validateEmailAddress(email.value);
        if (!result) {
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
          ...prevState,
          password: {
            ...prevState.password,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      } else {
        if (password.value.length <= 3) {
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
    };
    const checkConfirmPassword = () => {
      if (confirmPassword.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          confirmPassword: {
            ...prevState.confirmPassword,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      } else {
        if (password.value != confirmPassword.value) {
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
    };
    const checkPhoneno = () => {
      if (phoneno.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          phoneno: {
            ...prevState.phoneno,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      } else {
        if (phoneno.value.length < 10) {
          this.setState((prevState) => ({
            ...prevState,
            phoneno: {
              ...prevState.phoneno,
              isError: true,
              error_text: 'Phone number should be minimum 10 digits.',
            },
          }));
        }
      }
    };
    const checkAddress = () => {
      if (address.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          address: {
            ...prevState.address,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      }
    };
    const checkGender = () => {
      if (gender.value.length == 0) {
        this.setState((prevState) => ({
          ...prevState,
          gender: {
            ...prevState.gender,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      }
    };
    const checkDob = () => {
      console.log('asdf' + dob.value.length);
      if (dob.value === 'Date of birth') {
        console.log('inside');
        this.setState((prevState) => ({
          ...prevState,
          dob: {
            ...prevState.dob,
            isError: true,
            error_text: 'This field is required.',
          },
        }));
      }
    };

    //===========================================================================

    // =========== Handle onChangeText event common for every input ==============
    const handleOnChangeText = (text, label) => {
      if (label === 'firstname') {
        this.setState((prevState) => ({
          ...prevState,
          firstname: {
            ...prevState.firstname,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'lastname') {
        this.setState((prevState) => ({
          ...prevState,
          lastname: {
            ...prevState.lastname,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'email') {
        this.setState((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            value: text.trim(),
            isError: false,
          },
        }));
      } else if (label === 'password') {
        this.setState((prevState) => ({
          ...prevState,
          password: {
            ...prevState.password,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'confirmpassword') {
        this.setState((prevState) => ({
          ...prevState,
          confirmPassword: {
            ...prevState.confirmPassword,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'phoneno') {
        this.setState((prevState) => ({
          ...prevState,
          phoneno: {
            ...prevState.phoneno,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'address') {
        this.setState((prevState) => ({
          ...prevState,
          address: {
            ...prevState.address,
            value: text,
            isError: false,
          },
        }));
      } else if (label === 'gender') {
        this.setState((prevState) => ({
          ...prevState,
          gender: {
            ...prevState.gender,
            value: text,
            isError: false,
          },
        }));
        checkImage();
        checkFname();
        checkLname();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhoneno();
        checkAddress();
      } else if (label === 'dob') {
        this.setState((prevState) => ({
          ...prevState,
          dob: {
            ...prevState.dob,
            value: text.toString(),
            isError: false,
          },
        }));
        checkImage();
        checkFname();
        checkLname();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhoneno();
        checkAddress();
        checkGender();
      }
    };
    // ===========================================================================

    //================== handleEndEditing event common for every input ===========
    const handleEndEditing = (text) => {
      console.log('handleEndEditing called... ' + text);
    };

    const registerUser = () => {
      if (
        avatarSource.value !=
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' &&
        firstname.value.length > 0 &&
        lastname.value.length > 0 &&
        email.value.length > 0 &&
        password.value.length > 0 &&
        confirmPassword.value.length > 0 &&
        phoneno.value.length > 0 &&
        address.value.length > 0 &&
        gender.value.length > 0 &&
        dob.value.length > 0
      ) {
        console.log('all fields are filled');
        console.log(avatarSource.value);
        console.log(firstname.value);
        console.log(lastname.value);
        console.log(email.value);
        console.log(password.value);
        console.log(confirmPassword.value);
        console.log(phoneno.value);
        console.log(address.value);
        console.log(gender.value);
        console.log(dob.value);
      } else {
        console.log('Some Fields are empty.');
        checkImage();
        checkFname();
        checkLname();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        checkPhoneno();
        checkAddress();
        checkGender();
        checkAddress();
        checkDob();
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {isVisible ? (
            <ImageSelectModal
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

          <Avatar
            rounded
            source={{uri: avatarSource.value}}
            icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
            containerStyle={{backgroundColor: COLORS.white}}
            size="medium"
            onPress={() => toggleAvatar()}>
            <Accessory size={18} onPress={() => toggleAvatar()} />
          </Avatar>
          {avatarSource.isError ? (
            <Text style={styles.errorStyle}>{avatarSource.error_text}</Text>
          ) : null}
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="First name"
            iconName="account"
            value={firstname.value}
            isError={firstname.isError}
            error_text={firstname.error_text}
            forwardRef={signupRefs.firstNameRef}
            onChangeText={(text) => handleOnChangeText(text, 'firstname')}
            onSubmitEditing={() => signupRefs.lastNameRef.current.focus()}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => checkImage()}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Last name"
            iconName="account"
            value={lastname.value}
            isError={lastname.isError}
            error_text={lastname.error_text}
            forwardRef={signupRefs.lastNameRef}
            onChangeText={(text) => handleOnChangeText(text, 'lastname')}
            onSubmitEditing={() => signupRefs.emailRef.current.focus()}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => {
              checkImage();
              checkFname();
            }}
          />
        </View>

        <View>
          <MyTextInput
            label="Email"
            iconName="email"
            value={email.value}
            isError={email.isError}
            error_text={email.error_text}
            forwardRef={signupRefs.emailRef}
            onChangeText={(text) => handleOnChangeText(text, 'email')}
            onSubmitEditing={() => signupRefs.passwordRef.current.focus()}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => {
              checkImage();
              checkFname();
              checkLname();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={10}
            showEyeIcon={true}
            value={password.value}
            isError={password.isError}
            error_text={password.error_text}
            onChangeText={(text) => handleOnChangeText(text, 'password')}
            forwardRef={signupRefs.passwordRef}
            onSubmitEditing={() =>
              signupRefs.confirmPasswordRef.current.focus()
            }
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => {
              checkImage();
              checkFname();
              checkLname();
              checkEmail();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Confirm password"
            iconName="lock"
            secureTextEntry={true}
            maxLength={10}
            showEyeIcon={true}
            value={confirmPassword.value}
            isError={confirmPassword.isError}
            error_text={confirmPassword.error_text}
            onChangeText={(text) => handleOnChangeText(text, 'confirmpassword')}
            forwardRef={signupRefs.confirmPasswordRef}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onSubmitEditing={() => signupRefs.phonenoRef.current.focus()}
            onFocus={() => {
              checkImage();
              checkFname();
              checkLname();
              checkEmail();
              checkPassword();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Phone"
            iconName="phone"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneno.value}
            isError={phoneno.isError}
            error_text={phoneno.error_text}
            onChangeText={(text) => handleOnChangeText(text, 'phoneno')}
            forwardRef={signupRefs.phonenoRef}
            onSubmitEditing={() => signupRefs.addressRef.current.focus()}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => {
              checkImage();
              checkFname();
              checkLname();
              checkEmail();
              checkPassword();
              checkConfirmPassword();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <MyTextInput
            label="Address"
            iconName="pin"
            multiline={true}
            value={address.value}
            isError={address.isError}
            error_text={address.error_text}
            onChangeText={(text) => handleOnChangeText(text, 'address')}
            forwardRef={signupRefs.addressRef}
            onSubmitEditing={() => {}}
            onEndEditing={(e) => handleEndEditing(e.nativeEvent.text)}
            onFocus={() => {
              checkImage();
              checkFname();
              checkLname();
              checkEmail();
              checkPassword();
              checkConfirmPassword();
              checkPhoneno();
            }}
          />
        </View>

        <View style={styles.field_group}>
          <GenderRadioButton
            isError={gender.isError}
            error_text={gender.error_text}
            onSuccess={(value) => handleOnChangeText(value, 'gender')}
            forwardRef={signupRefs.genderRef}
          />
        </View>

        <View style={styles.field_group}>
          <MyDatePicker
            modeType="date"
            dob={dobVisibility}
            value={dob.value}
            isError={dob.isError}
            error_text={dob.error_text}
            onSuccess={(value) => handleOnChangeText(value, 'dob')}
            minimumDate={new Date(1980, 0, 1)}
            maximumDate={new Date()}
          />
        </View>

        <View style={styles.btnContainer}>
          <LinearGradientButton
            title="Register"
            height={responsiveHeight(13)}
            fontSize={responsiveHeight(3.25)}
            onPress={() => registerUser()}
          />
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
  errorStyle: {
    color: COLORS.red,
    fontFamily: FONTFAMILY.RobotoItalic,
  },
});