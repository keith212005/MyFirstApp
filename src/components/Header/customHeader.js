import React, {Component} from 'react';
import {Platform, Text, StyleSheet} from 'react-native';

import {Header} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth, responsiveHeight, COLORS} from '@resource';

import {Card, IconButton} from 'react-native-paper';

export default class CustomHeader extends Component {
  render() {
    return (
      <>
        <Card elevation={responsiveHeight(4)}>
          <LinearGradient
            colors={['#009387', '#007a93']}
            style={styles.gradient}>
            <Text style={styles.title}>{this.props.title}</Text>
            <IconButton
              icon="menu"
              size={responsiveHeight(6)}
              color={COLORS.white}
              onPress={() => this.props.onPress()}
            />
          </LinearGradient>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveHeight(1),
  },
  title: {
    color: COLORS.white,
    fontSize: responsiveHeight(4),
    fontWeight: '700',
    position: 'absolute',
    width: responsiveWidth(100),
    textAlign: 'center',
  },
});
