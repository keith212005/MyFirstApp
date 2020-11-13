import React, {Component} from 'react';
import {View, Platform, Text, StyleSheet, Pressable} from 'react-native';

import {Header} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveHeight, responsiveWidth, COLORS, FONTFAMILY} from '@resource';

import {Card, IconButton} from 'react-native-paper';

export default class CustomHeader extends Component {
  render() {
    return (
      <LinearGradient colors={['#009387', '#007a93']} style={styles.gradient}>
        <Pressable
          style={{backgroundColor: 'red'}}
          onPress={this.props.onPress()}>
          <IconButton
            icon="menu"
            color={COLORS.white}
            size={30}
            style={{backgroundColor: 'red'}}
            pointerEvents="none"
          />
        </Pressable>
        <Text style={styles.title}>{this.props.title}</Text>
      </LinearGradient>
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
    fontWeight: '600',
    width: responsiveWidth(100),
    textAlign: 'center',
    position: 'absolute',
  },
});
