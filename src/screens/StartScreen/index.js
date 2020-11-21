import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './style';
import {COLORS} from '@resource';

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
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LOGIN_SCREEN')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons
                  name="navigate-next"
                  color={COLORS.white}
                  size={20}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}
