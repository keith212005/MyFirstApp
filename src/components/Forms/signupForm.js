import React from 'react';
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

import {field_object_signup, signupRefs, commonStyle} from '@constants';
import {isValidEmail, isSameString, isEmpty, isPhoneNumber} from '@utils';
import {colors, responsiveHeight, fontFamily, responsiveWidth} from '@resource';
import LinearGradientButton from '../Buttons/linearGradientButton';
import GenderRadioButton from '../Buttons/genderRadioButton';
import MyDatePicker from '../Buttons/myDatePicker';
import MyTextInput from '../TextInputs/myTextInput';
import UploadImage from '../Modal/uploadImage';
import SimpleActivityIndicator from '../ActivityIndicator/simpleActivityIndicator';

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
      isVisible,
      isError,
    } = this.state;

    // called when we add/edit image Avatar
    const toggleAvatar = () => {
      this.setState((state) => ({isVisible: !state.isVisible}));
    };

    // call this function to validate any fieldName
    const validate = (fieldName) => {
      switch (fieldName) {
        case 'image':
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
          break;
        case 'firstname':
          if (isEmpty(firstname.value)) {
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
          if (isEmpty(lastname.value)) {
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
          if (isEmpty(email.value)) {
            this.setState((prevState) => ({
              email: {
                ...prevState.email,
                isError: true,
                error_text: 'This is required field.',
              },
            }));
          } else {
            if (!isValidEmail(email.value)) {
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
          if (isEmpty(password.value)) {
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
          break;
        case 'confirmpassword':
          if (isEmpty(confirmPassword.value)) {
            this.setState((prevState) => ({
              ...prevState,
              confirmPassword: {
                ...prevState.confirmPassword,
                isError: true,
                error_text: 'This field is required.',
              },
            }));
          } else {
            if (!isSameString(password.value, confirmPassword.value)) {
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
          if (isEmpty(phoneno.value)) {
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
            } else {
              if (!isPhoneNumber(phoneno.value)) {
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
          if (isEmpty(address.value)) {
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
          if (isEmpty(gender.value)) {
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
    const handleOnChangeText = (text, label) => {
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
                validate('image');
                validate('firstname');
                validate('lastname');
                validate('email');
                validate('password');
                validate('confirmpassword');
                validate('phoneno');
                validate('address');
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
                validate('image');
                validate('firstname');
                validate('lastname');
                validate('email');
                validate('password');
                validate('confirmpassword');
                validate('phoneno');
                validate('address');
                validate('gender');
              },
            );
          }
          break;
      }
    };

    // called when end editing on any InputText
    const handleEndEditing = (text) => {
      console.log('handleEndEditing called... ' + text);
    };

    // called when we press register button
    const submit = () => {
      if (
        avatarSource.value !=
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' &&
        !isEmpty(firstname.value) &&
        !isEmpty(lastname.value) &&
        !isEmpty(email.value) &&
        !isEmpty(password.value) &&
        !isEmpty(confirmPassword.value) &&
        !isEmpty(phoneno.value) &&
        !isEmpty(address.value) &&
        !isEmpty(gender.value) &&
        !isEmpty(dob.value)
      ) {
        var personData = {
          avatarSource: avatarSource.value,
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
          phoneno: phoneno.value,
          address: address.value,
          gender: gender.value,
          dob: dob.value,
        };
        console.log(personData);
      } else {
        validate('image');
        validate('firstname');
        validate('lastname');
        validate('email');
        validate('password');
        validate('confirmpassword');
        validate('phoneno');
        validate('address');
        validate('gender');
        validate('dob');
      }
    };

    return (
      <View style={commonStyle.containerFlex1}>
        {this.state.isProcessing ? <SimpleActivityIndicator /> : null}

        <View style={styles.imageContainer}>
          {isVisible ? (
            <UploadImage
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
            containerStyle={{backgroundColor: colors.white}}
            size="medium"
            onPress={() => toggleAvatar()}>
            <Accessory size={18} onPress={() => toggleAvatar()} />
          </Avatar>
          {avatarSource.isError ? (
            <Text style={[commonStyle.errorStyle]}>
              {avatarSource.error_text}
            </Text>
          ) : null}
        </View>

        <View style={commonStyle.field_group}>
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
            onFocus={() => validate('image')}
          />
        </View>

        <View style={commonStyle.field_group}>
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
              validate('image');
              validate('firstname');
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
              validate('image');
              validate('firstname');
              validate('lastname');
            }}
          />
        </View>

        <View style={commonStyle.field_group}>
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
              validate('image');
              validate('firstname');
              validate('lastname');
              validate('email');
            }}
          />
        </View>

        <View style={commonStyle.field_group}>
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
              validate('image');
              validate('firstname');
              validate('lastname');
              validate('email');
              validate('password');
            }}
          />
        </View>

        <View style={commonStyle.field_group}>
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
              validate('image');
              validate('firstname');
              validate('lastname');
              validate('email');
              validate('password');
              validate('confirmpassword');
            }}
          />
        </View>

        <View style={commonStyle.field_group}>
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
              validate('image');
              validate('firstname');
              validate('lastname');
              validate('email');
              validate('password');
              validate('confirmpassword');
              validate('phoneno');
            }}
          />
        </View>

        <View style={commonStyle.field_group}>
          <GenderRadioButton
            isError={gender.isError}
            error_text={gender.error_text}
            onSuccess={(value) => handleOnChangeText(value, 'gender')}
            forwardRef={signupRefs.genderRef}
          />
        </View>

        <View style={commonStyle.field_group}>
          <MyDatePicker
            visible={dob.visible}
            modeType="date"
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
            onPress={() => submit()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: responsiveHeight(4),
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
});
