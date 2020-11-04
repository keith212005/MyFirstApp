import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from './style';
import * as Components from '@components';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../constants/images/companylogo.png')}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LOGIN_SCREEN')}>
            <Components.linearGradientButton title="Sign In" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SIGNUP_SCREEN')}>
            <Components.linearGradientButton title="Sign Up" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
