import React, {Component} from 'react';
import {View, StyleSheet, Animated, Pressable, Text} from 'react-native';

import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

import {
  colors,
  deviceHeight,
  deviceWidth,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
} from '@resource';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const anim = new Animated.Value(0);

const getInitialState = () => ({
  path1: anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z',
      'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z',
    ],
  }),
  path2: anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
      'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z',
    ],
  }),

  signup: {name: 'Sign up', title: 'Create an account'},
  btnName: 'Log in',
  textTitle: 'Already a user',
});

export default class MyWave extends Component {
  state = getInitialState();

  runAnimation = () => {
    Animated.timing(anim, {
      toValue: this.state.btnName === 'Sign up' ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  handleOnPress = () => {
    this.setState(
      (prev) => ({
        btnName: prev.btnName === 'Sign up' ? 'Log in' : 'Sign up',
        textTitle:
          prev.btnName === 'Sign up' ? 'Already a user' : 'Create an account',
      }),
      () => this.runAnimation(),
    );
  };

  render() {
    return (
      <>
        <Svg>
          <Defs>
            <LinearGradient id="prefix__b">
              <Stop offset="50%" stopColor="#009284" />
              <Stop offset="95%" stopColor="#32ded488" />
            </LinearGradient>
          </Defs>
          <AnimatedPath
            y={deviceHeight / 1.6}
            opacity={0.7}
            d={this.state.path1}
            fill="url(#prefix__b)"
          />
          <AnimatedPath
            y={deviceHeight / 1.6}
            opacity={0.7}
            d={this.state.path2}
            fill="url(#prefix__b)"
          />
        </Svg>
        <View style={styles.container}>
          <Text style={styles.title}> {this.state.textTitle}</Text>
          <Pressable onPress={() => this.handleOnPress()}>
            <Text style={styles.button}>{this.state.btnName}</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    marginTop: deviceHeight / 1.22,
    position: 'absolute',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
  },
  button: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fontFamily.RobotoBold,
  },
});
