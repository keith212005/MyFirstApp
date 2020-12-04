import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './style';
import {colors, getImageName, icon} from '@resource';

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
            source={{uri: 'companylogo'}}
          />
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient
              colors={colors.themeButton}
              style={styles.lineargradient}>
              <Text style={styles.textSign}>Get Started</Text>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: icon.forward_white}}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}
