import React, {Component} from 'react';
import {Platform, Text, StyleSheet} from 'react-native';

import {Header} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, IconButton} from 'react-native-paper';

import {responsiveWidth, responsiveHeight, colors} from '@resource';
import {actionCreaters} from '@actions';

export default class CustomHeader extends Component {
  render() {
    return (
      <Card elevation={responsiveHeight(4)}>
        <LinearGradient colors={['#009387', '#007a93']} style={styles.gradient}>
          <Text style={styles.title}>{this.props.title}</Text>
          <IconButton
            icon="menu"
            size={responsiveHeight(6)}
            color={colors.white}
            onPress={() => this.props.onPress()}
          />
        </LinearGradient>
      </Card>
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
    color: colors.white,
    fontSize: responsiveHeight(4),
    fontWeight: '700',
    position: 'absolute',
    width: responsiveWidth(100),
    textAlign: 'center',
  },
});
