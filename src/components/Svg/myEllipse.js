import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Text,
  Easing,
} from 'react-native';

import Svg, {Path, Defs, Stop, LinearGradient, Ellipse} from 'react-native-svg';
import * as Resource from '@resource';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const anim = new Animated.Value(0);

// layer1 = 'M-6.49,152.45 C139.67,271.88 304.46,271.88 508.17,21.20 L505.36,-9.38 L-5.92,-10.36 Z'
// layer2 = 'M-18.90,98.19 C158.86,193.91 319.69,177.13 507.62,15.28 L505.36,-9.38 L-5.92,-10.36 Z'

const getInitialState2 = () => ({
  path1: anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'M-6.49,152.45 C139.67,271.88 304.46,271.88 508.17,21.20 L505.36,-9.38 L-5.92,-10.36 Z',
      'M-18.90,98.19 C158.86,193.91 319.69,177.13 507.62,15.28 L505.36,-9.38 L-5.92,-10.36 Z',
      'M-13.26,125.81 C229.97,161.34 284.14,27.13 508.17,98.19 L506.49,-14.30 L-7.62,-6.41 Z',
    ],
  }),
  path2: anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'M-6.49,152.45 C139.67,271.88 304.46,271.88 508.17,21.20 L505.36,-9.38 L-5.92,-10.36 Z',
      'M-18.90,98.19 C158.86,193.91 319.69,177.13 507.62,15.28 L505.36,-9.38 L-5.92,-10.36 Z',
      'M-8.74,93.25 C161.68,58.70 225.45,170.22 507.05,122.86 L506.49,-14.30 L-7.62,-6.41 Z',
    ],
  }),
});

export default class MyEllipse extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState2();
  }

  runAnimation = (toValue) => {
    Animated.timing(anim, {
      toValue: toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  shouldComponentUpdate() {
    if (this.props.nextIndex == 0 && this.props.activeIndex == 0) {
      this.runAnimation(0);
    } else if (this.props.nextIndex == 1 && this.props.activeIndex == 1) {
      this.runAnimation(1);
    } else if (this.props.nextIndex == 2 && this.props.activeIndex == 2) {
      this.runAnimation(2);
    }
    return false;
  }

  render() {
    return (
      <>
        <Svg style={{position: 'absolute', borderWidth: 1, borderColor: 'red'}}>
          <Defs>
            <LinearGradient id="prefix__b">
              <Stop offset="5%" stopColor="#009284" />
              <Stop offset="95%" stopColor="#32ded488" />
            </LinearGradient>
          </Defs>
          <AnimatedPath
            y="0"
            opacity={0.7}
            d={this.state.path1}
            fill="url(#prefix__b)"
          />
          <AnimatedPath
            y="0"
            opacity={0.7}
            d={this.state.path2}
            fill="url(#prefix__b)"
          />
        </Svg>
      </>
    );
  }
}
