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

export default class MyEllipse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initalValue: '300',
      animatedValue: new Animated.ValueXY({x: 400, y: 200}),
      circleRef: React.createRef(),
    };
  }

  shouldComponentUpdate() {
    console.log('should component update called...' + this.props.activeIndex);
    if (this.props.activeIndex == 1) {
      Animated.timing(this.state.animatedValue, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(this.state.animatedValue, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    return false;
  }

  render(props) {
    return (
      <>
        <View
          style={[
            StyleSheet.absoluteFill,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Svg height={Resource.deviceHeight} width={Resource.deviceWidth}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="#87fff6" stopOpacity="1" />
                <Stop offset="1" stopColor="#156b64" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <AnimatedEllipse
              ref={this.state.circleRef}
              cx={Resource.deviceWidth / 2}
              cy={Resource.deviceHeight / 5}
              rx="400"
              ry={this.state.animatedValue.y}
              fill="url(#grad)"
            />
          </Svg>
        </View>
      </>
    );
  }
}
