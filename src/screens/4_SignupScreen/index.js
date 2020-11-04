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
} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatarSource:
        'https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg',
    };
  }

  handleNameChange = (inputText) => {
    console.log(inputText);
    this.setState({name: inputText.text});
  };

  handleEmailChange = (inputText) => {
    console.log(inputText);
    this.setState({email: inputText.text});
  };

  handlePasswordChange = (inputText) => {
    console.log(inputText);
    this.setState({password: inputText.text});
  };

  handleConfirmPasswordChange = (inputText) => {
    console.log(inputText);
    this.setState({confirmPassword: inputText.text});
  };

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
          <Image
            style={styles.imageUpload}
            source={{uri: this.state.avatarSource}}
          />
          <Components.simpleDialog
            onSuccess={(image) => {
              console.log(image);
              this.setState({avatarSource: image});
            }}
          />
        </View>
        <View style={styles.footer}>
          <ScrollView style={{borderWidth: 0}}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.field_group}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <Components.textInput
                placeholder="Full Name"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </View>

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.field_group}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <Components.textInput
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </View>

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.field_group}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <Components.textInput
                placeholder="password"
                secureTextEntry={true}
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </View>

            <Text style={styles.text_footer}>Confirm password</Text>
            <View style={styles.field_group}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <Components.textInput
                placeholder="Confirm password"
                secureTextEntry={true}
                value={this.state.password}
                onChange={this.handlePasswordChange}
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
