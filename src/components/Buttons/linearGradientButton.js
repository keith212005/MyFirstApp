import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTFAMILY} from '@resource';

export default class LinearGradientButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <>
        <TouchableOpacity
          onPress={props.onPress}
          ref={props.forwardRef}
          onSubmitEditing={this.props.onSubmitEditing}>
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
      </>
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
    fontFamily: FONTFAMILY.RobotoBold,
    color: COLORS.white,
  },
});
