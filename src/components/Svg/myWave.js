import React, {Component} from 'react';
import {View, StyleSheet, Animated, Pressable, Text} from 'react-native';

import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

import * as Resource from '@resource';

const AnimatedPath = Animated.createAnimatedComponent(Path);

function getInitialState() {
  const anim = new Animated.Value(0);
  const path1 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z',
      'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z',
    ],
  });
  const path2 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
      'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z',
    ],
  });
  const textButtonName = 'Log in';
  const textTitle = 'Already a user';
  return {anim, path1, path2, textButtonName, textTitle};
}

export default class MyWave extends Component {
  state = getInitialState();

  runAnimation = () => {
    Animated.timing(this.state.anim, {
      toValue: this.state.textButtonName == 'Sign up' ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  handleOnPress = () => {
    this.setState(
      (prevState) => ({
        textButtonName:
          prevState.textButtonName == 'Sign up' ? 'Log in' : 'Sign up',
        textTitle:
          prevState.textButtonName == 'Sign up'
            ? 'Already a user'
            : 'Create an account',
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
              <Stop offset="5%" stopColor="#009284" />
              <Stop offset="95%" stopColor="#32ded488" />
            </LinearGradient>
          </Defs>
          <AnimatedPath
            y={Resource.deviceHeight / 1.7}
            opacity={0.7}
            d={this.state.path1}
            fill="url(#prefix__b)"
          />
          <AnimatedPath
            y={Resource.deviceHeight / 1.7}
            opacity={0.7}
            d={this.state.path2}
            fill="url(#prefix__b)"
          />
        </Svg>
        <View style={styles.container}>
          <Text style={styles.title}> {this.state.textTitle}</Text>
          <Pressable onPress={() => this.handleOnPress()}>
            <Text style={styles.button}>{this.state.textButtonName}</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Resource.deviceWidth,
    marginTop: Resource.deviceHeight / 1.25,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Resource.colors.white,
  },
  button: {
    color: Resource.colors.white,
    fontSize: 20,
    fontFamily: Resource.fontFamily.RobotoBold,
  },
});

// path1 =
//   'M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z';
// path2 =
//   'M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z';
// ellipsepath =
//   'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z';
