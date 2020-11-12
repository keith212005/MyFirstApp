import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class StartScreen extends React.Component {
  handleSignIn = () => this.props.navigation.navigate('LOGIN_SCREEN');
  handleSignUp = () => this.props.navigation.navigate('SIGNUP_SCREEN');

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{uri: 'asset:/images/companylogo.png'}}
          />
        </View>
        <View style={styles.footer}>
          <Components.linearGradientButton
            title="Sign In"
            onPress={this.handleSignIn}
          />

          <Components.linearGradientButton
            title="Sign Up"
            onPress={this.handleSignUp}
          />
        </View>
      </View>
    );
  }
}
