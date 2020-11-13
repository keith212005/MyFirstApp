import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './style';
import {LinearGradientButton} from '@components';

export default class StartScreen extends React.Component {
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
          <View style={{padding: 10}}>
            <LinearGradientButton
              title="Sign In"
              onPress={() => this.props.navigation.navigate('LOGIN_SCREEN')}
              height={50}
            />
          </View>
          <View style={{padding: 10}}>
            <LinearGradientButton
              title="Sign up"
              onPress={() => this.props.navigation.navigate('SIGNUP_SCREEN')}
              height={50}
            />
          </View>
        </View>
      </View>
    );
  }
}
