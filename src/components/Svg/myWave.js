import React, {Component} from 'react';
import {View, StyleSheet, Animated, Pressable, Button} from 'react-native';

import Svg, {Path, Defs, Stop, LinearGradient, Text} from 'react-native-svg';

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
    const {anim} = this.state;

    Animated.timing(anim, {
      toValue: this.state.textButtonName == 'Sign up' ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {path1, path2} = this.state;
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
            d={path1}
            fill="url(#prefix__b)"
          />
          <AnimatedPath
            y={Resource.deviceHeight / 1.7}
            opacity={0.7}
            d={path2}
            fill="url(#prefix__b)"
          />

          <Text
            x={Resource.deviceWidth / 2}
            y={Resource.deviceHeight / 1.36}
            textAnchor="middle"
            fontFamily={Resource.fontFamily.RobotoRegular}
            fontSize="12"
            fill="white">
            {this.state.textTitle}
          </Text>

          <Text
            x={Resource.deviceWidth / 2}
            y={Resource.deviceHeight / 1.3}
            textAnchor="middle"
            fontFamily={Resource.fontFamily.RobotoBold}
            fontSize="18"
            fill="white"
            onPress={() => {
              this.setState(
                (prevState) => ({
                  textButtonName:
                    prevState.textButtonName == 'Sign up'
                      ? 'Log in'
                      : 'Sign up',
                  textTitle:
                    prevState.textButtonName == 'Sign up'
                      ? 'Already a user'
                      : 'Create an account',
                }),
                () => this.runAnimation(),
              );
            }}>
            {this.state.textButtonName}
          </Text>
        </Svg>
      </>
    );
  }
}

// path1 =
//   'M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z';
// path2 =
//   'M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z';
// ellipsepath =
//   'M-23.42,3.47 C128.38,-113.97 240.12,-112.98 390.24,10.36 L390.79,160.36 L-27.36,151.47 Z';
