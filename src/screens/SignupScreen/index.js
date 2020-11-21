import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {styles} from './style';
import {SignupForm} from '@components';
import * as Animatable from 'react-native-animatable';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
            duration={2000}>
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <SignupForm {...this.props} />
            </ScrollView>
          </Animatable.View>
        </View>
      </>
    );
  }
}
