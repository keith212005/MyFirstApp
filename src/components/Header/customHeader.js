import React, {Component} from 'react';
import {
  View,
  Platform,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithFeedback,
} from 'react-native';

import {Header} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveHeight, responsiveWidth, COLORS, FONTFAMILY} from '@resource';

import {Card, IconButton} from 'react-native-paper';

export default class CustomHeader extends Component {
  render() {
    return (
      <>
        <LinearGradient colors={['#009387', '#007a93']} style={styles.gradient}>
          <Text style={styles.title}>{this.props.title}</Text>
          <IconButton
            icon="menu"
            color={COLORS.white}
            onPress={() => this.props.onPress()}
          />
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    width: responsiveWidth(100),
    textAlign: 'center',
  },
});
