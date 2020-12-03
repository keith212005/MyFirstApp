import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {colors, fontFamily, responsiveHeight, responsiveWidth} from '@resource';

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
            colors={
              props.fillColor
                ? props.fillColor
                : colors.linearButtonWhiteBackground
            }
            style={{
              height: props.height,
              width: props.width,
              justifyContent: 'center',
              borderRadius: props.borderRadius ? props.borderRadius : null,
              borderWidth: props.borderWidth ? props.borderWidth : null,
              borderColor: props.borderColor ? props.borderColor : null,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: props.fontSize ? props.fontSize : 12,
                color: props.fontColor ? props.fontColor : colors.black,
                fontFamily: props.fontFamily
                  ? props.fontFamily
                  : fontFamily.RobotoRegular,
              }}>
              {props.title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </>
    );
  }
}
