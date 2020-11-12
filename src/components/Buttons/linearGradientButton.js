import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {color, fontfamily} from '@resource';
import {responsiveHeight, responsiveWidth} from '@resource';

export default class LinearGradientButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient
          colors={['#08d4c4', '#01ab9d']}
          style={[
            styles.gradientView,
            {height: props.height, width: props.width},
          ]}>
          <Text style={[styles.text, {fontSize: props.fontSize}]}>
            {props.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gradientView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontFamily: fontfamily.RobotoBold,
    color: color.white,
  },
});
