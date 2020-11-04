import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatarSource: 'https://brandmark.io/logo-rank/random/bp.png',
      gender: 'male',
      phoneno: '',
      dob: 'Birth',
      address: '',
      dobVisibility: false,
    };
  }

  authenticateUser = () => {
    if (this.state.email != 'kj@gmail.com') {
      this.setState({
        isValidEmail: false,
      });
    }
    if (this.state.password != '1234') {
      this.setState({
        isValidPassword: false,
      });
    }
    if (this.state.email === 'kj@gmail.com' && this.state.password === '1234') {
      this.props.navigation.replace('HOME_SCREEN');
    }
  };

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign Up</Text>
          <View></View>
        </View>
        <View style={styles.footer}>
          <ScrollView>
            <Image
              style={styles.imageUpload}
              source={{uri: this.state.avatarSource}}
            />
            <Components.simpleDialog
              onSuccess={(image) => this.setState({avatarSource: image})}
            />

            <View style={styles.field_group}>
              <Components.textInput
                value={this.state.firstname}
                iconName="user-o"
                placeholder="First name"
                onChange={(text) => this.setState({firstname: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                value={this.state.lastname}
                iconName="user-o"
                placeholder="Last name"
                onChange={(text) => this.setState({lastname: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                value={this.state.email}
                iconName="envelope"
                placeholder="Email"
                iconSize={16}
                onChange={(text) => this.setState({email: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                secureTextEntry={true}
                value={this.state.password}
                iconName="lock"
                placeholder="Password"
                onChange={(text) => this.setState({password: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                secureTextEntry={true}
                value={this.state.password}
                iconName="lock"
                placeholder="Confirm password"
                onChange={(text) => this.setState({confirmPassword: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.genderRadioButton
                gender={this.state.gender}
                onChange={(text) => {
                  this.setState({gender: text});
                  console.log(this.state.gender);
                }}
              />
            </View>

            <View style={styles.field_group}>
              <Components.myDatePicker
                modeType="date"
                visible={this.state.dobVisibility}
                onSuccess={(text) => {
                  this.setState({dob: text.toString()});
                  console.log(text);
                }}
              />
              <Text style={{marginLeft: 20, fontSize: 16}}>
                {this.state.dob}
              </Text>
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                secureTextEntry={true}
                value={this.state.password}
                iconName="phone"
                placeholder="Phone number"
                keyboardType={'numeric'}
                onChange={(text) => this.setState({confirmPassword: text})}
              />
            </View>

            <View style={styles.field_group}>
              <Components.textInput
                secureTextEntry={true}
                value={this.state.password}
                iconName="map-pin"
                placeholder="Address"
                keyboardType={'numeric'}
                onChange={(text) => this.setState({confirmPassword: text})}
              />
            </View>

            <TouchableOpacity onPress={() => this.authenticateUser()}>
              <Components.linearGradientButton title="Register" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

// <Pressable
//   onPress={() => {
//     this.setState({dobVisibility: true});
//     console.log(this.state.dobVisibility);
//   }}
//   style={{borderWidth: 1, borderColor: 'red'}}>
