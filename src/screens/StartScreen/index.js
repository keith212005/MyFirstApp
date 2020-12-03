import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './style';
import {colors} from '@resource';

export default class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            style={styles.logo}
            resizeMode="contain"
            source={{uri: 'asset:/images/companylogo.png'}}
          />
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient colors={colors.themeButton} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons
                name="navigate-next"
                color={colors.white}
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}
