import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {styles} from './style';
import {LoginForm} from '@components';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <LoginForm {...this.props} />
            </ScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}
