import React from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';

import {styles} from './style';
import {SignupForm} from '@components';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          <KeyboardAvoidingView style={styles.footer} enabled>
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <SignupForm {...this.props} />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  }
}
