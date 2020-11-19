import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTFAMILY, responsiveHeight, responsiveWidth} from '@resource';

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
            <Text
              style={[
                styles.titleText,
                {
                  fontSize: props.fontSize
                    ? props.fontSize
                    : responsiveHeight(3),
                },
              ]}>
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
  titleText: {
    fontFamily: FONTFAMILY.RobotoBold,
    color: COLORS.white,
  },
});
