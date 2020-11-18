import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';

import {styles} from './style';
import {LoginForm, LoginFormHooks} from '@components';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitleText}>Welcome!</Text>
          </View>

          <KeyboardAvoidingView style={styles.footer}>
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <LoginForm {...this.props} />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  }
}
