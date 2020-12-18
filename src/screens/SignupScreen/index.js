import React from 'react';
import {View, Text, StyleSheet, Keyboard, Alert} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';
import {Avatar, Accessory} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {actionCreaters} from '@actions';
import {styles} from './style';
import {field_object_signup, signupRefs} from '@constants';
import * as Utils from '@utils';
import * as Resource from '@resource';
import * as Components from '@components';
import {DB} from '@storage';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    const user = this.props.route.params.user;
    for (var key in signupRefs) {
      signupRefs[key] = React.createRef();
    }
    this.state = {...field_object_signup};
  }

  componentDidMount() {
    if (this.props.route.params.user.email != null) {
      const user = this.props.route.params.user;
      this.setState((prevState) => ({
        ...prevState,
        avatarSource: {
          value: user.avatar,
        },
        firstname: {
          value: user.firstname,
        },
        lastname: {
          value: user.lastname,
        },
        email: {
          value: user.email,
        },
        phone: {
          value: user.phone.toString(),
        },
        address: {
          value: user.address,
        },
        gender: {
          value: user.gender == 0 ? 'Male' : 'Female',
        },
        dob: {
          value: user.dob,
        },
      }));
    }
  }

  // called when we add/edit image Avatar
  toggleAvatar = () => {
    this.setState((state) => ({isVisible: !state.isVisible}));
  };

  // getting InputText data
  getData = (label) => {
    switch (label) {
      case 'firstname':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.firstNameRef,
          isError: this.state.firstname.isError,
          error_text: this.state.firstname.error_text,
          value: this.state.firstname.value,
        };
      case 'lastname':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.lastNameRef,
          isError: this.state.lastname.isError,
          error_text: this.state.lastname.error_text,
          value: this.state.lastname.value,
        };
      case 'email':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.emailRef,
          isError: this.state.email.isError,
          error_text: this.state.email.error_text,
          value: this.state.email.value,
          keyboardType: 'email-address',
        };
      case 'password':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.passwordRef,
          isError: this.state.password.isError,
          error_text: this.state.password.error_text,
          value: this.state.password.value,
          secureTextEntry: true,
          showEyeIcon: true,
        };
      case 'confirmpassword':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.confirmPasswordRef,
          isError: this.state.confirmpassword.isError,
          error_text: this.state.confirmpassword.error_text,
          value: this.state.confirmpassword.value,
          secureTextEntry: true,
          showEyeIcon: true,
        };
      case 'phone':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.phonenoRef,
          isError: this.state.phone.isError,
          error_text: this.state.phone.error_text,
          value: this.state.phone.value,
          keyboardType: 'phone-pad',
        };
      case 'address':
        return {
          iconName: Utils.getIcon(label),
          refs: signupRefs.addressRef,
          isError: this.state.address.isError,
          error_text: this.state.address.error_text,
          value: this.state.address.value,
          multiline: true,
        };
      default:
        break;
    }
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
        if (Utils.isEmpty(this.state.firstname.value)) {
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
        if (Utils.isEmpty(this.state.lastname.value)) {
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
        if (Utils.isEmpty(this.state.confirmpassword.value)) {
          this.setState((prevState) => ({
            ...prevState,
            confirmpassword: {
              ...prevState.confirmpassword,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        } else {
          if (
            !Utils.isSameString(
              this.state.password.value,
              this.state.confirmpassword.value,
            )
          ) {
            this.setState((prevState) => ({
              ...prevState,
              confirmpassword: {
                ...prevState.confirmpassword,
                isError: true,
                error_text: 'Password and Confirm password does not match!',
              },
            }));
          }
        }
        break;
      case 'phone':
        if (Utils.isEmpty(this.state.phone.value)) {
          this.setState((prevState) => ({
            ...prevState,
            phone: {
              ...prevState.phone,
              isError: true,
              error_text: 'This field is required.',
            },
          }));
        } else {
          if (this.state.phone.value.length < 10) {
            this.setState((prevState) => ({
              ...prevState,
              phone: {
                ...prevState.phone,
                isError: true,
                error_text: 'Phone number should be minimum 10 digits.',
              },
            }));
          } else {
            if (!Utils.isPhoneNumber(this.state.phone.value)) {
              this.setState((prevState) => ({
                ...prevState,
                phone: {
                  ...prevState.phone,
                  isError: true,
                  error_text: 'Enter a valid phone number.',
                },
              }));
            }
          }
        }
        break;
      case 'address':
        if (Utils.isEmpty(this.state.address.value)) {
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
        if (Utils.isEmpty(this.state.gender.value)) {
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
        if (Utils.isSameString(this.state.dob.value, 'Date of birth')) {
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
              isError: false,
              value: text.trim(),
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
            confirmpassword: {
              ...prevState.confirmpassword,
              value: text,
              isError: false,
            },
          }));
        }
        break;
      case 'phone':
        {
          this.setState((prevState) => ({
            ...prevState,
            phone: {
              ...prevState.phone,
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
              this.validate('phone');
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
              this.validate('phone');
              this.validate('address');
              this.validate('gender');
            },
          );
        }
        break;
    }
  };

  // called when we submit text in anyb Input textAlign
  handleOnSubmitEditing = (label) => {
    const user = this.props.route.params.user;
    switch (label) {
      case 'firstname':
        return signupRefs.lastNameRef.current.focus();
      case 'lastname':
        return signupRefs.emailRef.current.focus();
      case 'email': {
        return user.email != null
          ? signupRefs.phonenoRef.current.focus()
          : signupRefs.passwordRef.current.focus();
      }
      case 'password':
        return signupRefs.confirmPasswordRef.current.focus();
      case 'confirmpassword':
        return signupRefs.phonenoRef.current.focus();
      case 'phone':
        return signupRefs.addressRef.current.focus();
      case 'address':
        this.validate(label);
        break;
    }
  };

  // called when end editing on any InputText
  handleEndEditing = (text) => {
    console.log('handleEndEditing called... ' + text);
  };

  // called when focus on any Text InputText
  handleOnFocus = (label) => {
    switch (label) {
      case 'firstname':
        this.validate('image');
        break;
      case 'lastname':
        this.validate('image');
        this.validate('firstname');
        break;
      case 'email':
        this.validate('image');
        this.validate('firstname');
        this.validate('lastname');
        break;
      case 'password':
        this.validate('image');
        this.validate('firstname');
        this.validate('lastname');
        this.validate('email');
        break;
      case 'confirmpassword':
        this.validate('image');
        this.validate('firstname');
        this.validate('lastname');
        this.validate('email');
        this.validate('password');
        break;
      case 'phone':
        this.validate('image');
        this.validate('firstname');
        this.validate('lastname');
        this.validate('email');
        this.validate('password');
        this.validate('confirmpassword');
        break;
      case 'address':
        this.validate('image');
        this.validate('firstname');
        this.validate('lastname');
        this.validate('email');
        this.validate('password');
        this.validate('confirmpassword');
        this.validate('phone');
        break;
      default:
    }
  };

  // called inside of submit function
  updateUserData() {
    const user = this.props.route.params.user;

    let insert_sql =
      'UPDATE USERS SET avatar=?, fName=?, lName=?, email=?, phone=?, ' +
      'address=?, gender=?, dob=? WHERE ID=?';
    let arrValues = [
      this.state.avatarSource.value,
      this.state.firstname.value,
      this.state.lastname.value,
      this.state.email.value,
      this.state.phone.value,
      this.state.address.value,
      this.state.gender.value === 'Male' ? 1 : 0,
      this.state.dob.value,
      user.id,
    ];
    DB.update(insert_sql, arrValues).then(
      (message) => {
        Alert.alert('Success', message, [
          {
            text: 'OK',
            onPress: () => {
              //saving values in reducer
              userInfo = {
                avatar: this.state.avatarSource.value,
                firstname: this.state.firstname.value,
                lastname: this.state.lastname.value,
                email: this.state.email.value,
                phone: this.state.phone.value,
                address: this.state.address.value,
                gender: this.state.gender.value === 'Male' ? 1 : 0,
                dob: this.state.dob.value,
              };
              console.log(userInfo);
              this.props.updateUserInfo(userInfo);
              this.props.navigation.goBack();
            },
          },
        ]);
      },
      (error) => console.log('error>>>>>>>>>', error),
    );
  }

  // called when we press register button
  submit = () => {
    const state = this.state;
    const user = this.props.route.params.user;
    if (
      this.state.avatarSource.value !=
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' &&
      !Utils.isEmpty(state.firstname.value) &&
      !Utils.isEmpty(state.lastname.value) &&
      !Utils.isEmpty(state.email.value) &&
      !Utils.isEmpty(state.password.value) &&
      !Utils.isEmpty(state.confirmpassword.value) &&
      !Utils.isEmpty(state.phone.value) &&
      !Utils.isEmpty(state.address.value) &&
      !Utils.isEmpty(state.gender.value) &&
      !Utils.isEmpty(state.dob.value)
    ) {
      // if user is already logged in update userinfo in DB and reducer else insert in Db
      if (user.email != null) {
        this.updateUserData();
      } else {
        let sql = 'SELECT EMAIL FROM USERS WHERE EMAIL=?';
        let arrValues = [state.email.value];
        // if user does not exists insert data
        DB.checkIfUserExists(sql, arrValues).then(
          (result) => {
            let insert_sql =
              'INSERT INTO USERS (avatar,fName,lName,email,password,phone,address,gender,dob) ' +
              'VALUES (?,?,?,?,?,?,?,?,?)';
            let arrValues = [
              state.avatarSource.value,
              state.firstname.value,
              state.lastname.value,
              state.email.value,
              state.password.value,
              state.phone.value,
              state.address.value,
              state.gender.value === 'Male' ? 1 : 0,
              state.dob.value,
            ];
            DB.insert(insert_sql, arrValues).then((result) => {
              Alert.alert(
                'Success',
                'Successfully registered.',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      this.props.navigation.replace('Login');
                    },
                  },
                ],
                {cancelable: false},
              );
            });
          },
          (error) => {
            Alert.alert('Error', error);
          },
        );
      }
    } else {
      this.validate('image');
      this.validate('firstname');
      this.validate('lastname');
      this.validate('email');
      this.validate('password');
      this.validate('confirmpassword');
      this.validate('phone');
      this.validate('address');
      this.validate('gender');
      this.validate('dob');
    }
  };

  myTextInput = (props) => {
    const labelInLowerCase = Utils.removeSpaces(props.label).toLowerCase();
    const data = this.getData(labelInLowerCase);

    // console.log(JSON.stringify(data));
    return (
      <Components.MyTextInput
        label={props.label}
        iconName={data.iconName}
        value={data.value}
        placeholder={props.label}
        isError={data.isError}
        error_text={data.error_text}
        forwardRef={data.refs}
        secureTextEntry={data.secureTextEntry}
        showEyeIcon={data.showEyeIcon}
        keyboardType={data.keyboardType}
        multiline={data.multiline}
        onChangeText={(text) => this.handleOnChangeText(text, labelInLowerCase)}
        onSubmitEditing={() => this.handleOnSubmitEditing(labelInLowerCase)}
        onEndEditing={(e) => this.handleEndEditing(e.nativeEvent.text)}
        onFocus={() => this.handleOnFocus(labelInLowerCase)}
      />
    );
  };

  render() {
    const user = this.props.route.params.user;
    const gender = user.gender == 1 ? 'Male' : 'Female';
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {!user.email ? 'Sign Up' : 'Update'}
            </Text>
          </View>

          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
            duration={1000}>
            <KeyboardAwareScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="always">
              {this.state.isProcessing ? <SimpleActivityIndicator /> : null}

              {this.state.isVisible ? (
                <Components.UploadImage
                  isVisible={this.state.isVisible}
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
                source={this.state.avatarSource.value}
                isError={this.state.avatarSource.isError}
                error_text={this.state.avatarSource.error_text}
                onPress={() => this.toggleAvatar()}
              />

              {this.myTextInput({label: 'First name'})}
              {this.myTextInput({label: 'Last name'})}
              {this.myTextInput({label: 'Email'})}
              {!user.email && this.myTextInput({label: 'Password'})}
              {!user.email && this.myTextInput({label: 'Confirm Password'})}
              {this.myTextInput({label: 'Phone'})}
              {this.myTextInput({label: 'Address'})}

              <Components.GenderRadioButton
                value={user.email ? gender : this.state.gender.value}
                isError={this.state.gender.isError}
                error_text={this.state.gender.error_text}
                onSuccess={(value) => this.handleOnChangeText(value, 'gender')}
                forwardRef={signupRefs.genderRef}
              />

              <Components.MyDatePicker
                visible={this.state.dob.visible}
                modeType="date"
                value={user.dob != null ? user.dob : this.state.dob.value}
                isError={this.state.dob.isError}
                error_text={this.state.dob.error_text}
                onSuccess={(value) => this.handleOnChangeText(value, 'dob')}
                minimumDate={new Date(1980, 0, 1)}
                maximumDate={new Date()}
              />

              <View style={{marginBottom: 20}}>
                <Components.LinearGradientButton
                  title={user.email != null ? 'Save' : 'Register'}
                  onPress={() => this.submit()}
                  height={Resource.responsiveHeight(14)}
                  fontSize={15}
                  borderRadius={5}
                  fillColor={Resource.colors.themeButton}
                  fontColor={Resource.colors.white}
                  fontFamily={Resource.fontFamily.RobotoBold}
                />
              </View>
            </KeyboardAwareScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(null, matchDispatchToProps)(Signup);
