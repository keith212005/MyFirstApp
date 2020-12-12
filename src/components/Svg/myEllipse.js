import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Text,
  Easing,
} from 'react-native';

import Svg, {Ellipse, Defs, LinearGradient, Stop} from 'react-native-svg';
import * as Resource from '@resource';

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
const anim = new Animated.Value(0);

const getInitialState = (props) => ({
  circleRef: React.createRef(),
  activeIndex: props.activeIndex,
  toggleState: props.toggle,
  ry: anim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 100],
  }),
});

export default class MyEllipse extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState(props);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...');
    Animated.timing(anim, {
      toValue: this.props.direction === 'up' ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    return false;
  }

  render() {
    return (
      <>
        <Svg style={{position: 'absolute'}}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#87fff6" stopOpacity="1" />
              <Stop offset="1" stopColor="#156b64" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <AnimatedEllipse
            ref={this.state.circleRef}
            cx={Resource.deviceWidth / 2}
            cy={Resource.deviceHeight / 6}
            rx="300"
            ry={this.state.ry}
            fill="url(#grad)"
          />
        </Svg>
      </>
    );
  }
}
