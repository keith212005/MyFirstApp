import React, {Component} from 'react';
import {View, StyleSheet, Animated, Pressable} from 'react-native';

import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan,
  TextPath,
  Ellipse,
  ClipPath,
} from 'react-native-svg';

import * as Resource from '@resource';

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

export default class MyWave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleRef: React.createRef(),
      animatedValue: new Animated.ValueXY({x: 200, y: 250}),
    };
  }

  runAnimation = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render(props) {
    return (
      <Svg
        style={
          ([StyleSheet.absoluteFill],
          {
            // alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'red',
            fontSize: 24,
          })
        }>
        <Defs>
          <LinearGradient id="prefix__b">
            <Stop offset="5%" stopColor="#009284" />
            <Stop offset="95%" stopColor="#32ded488" />
          </LinearGradient>
        </Defs>

        <Path
          y={Resource.deviceHeight / 1.7}
          opacity={0.7}
          d="M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z"
          fill="url(#prefix__b)"
        />
        <Path
          y={Resource.deviceHeight / 1.7}
          opacity={0.7}
          d="M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          fill="url(#prefix__b)"
        />

        <AnimatedEllipse
          ref={this.state.circleRef}
          cx={Resource.deviceWidth / 2}
          cy={Resource.deviceHeight / 1.3}
          rx="230"
          ry={this.state.animatedValue.y}
          fill="url(#prefix__b)"
        />
        <Text
          x={Resource.deviceWidth / 2}
          y={Resource.deviceHeight / 1.3}
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="white"
          onPress={() => this.runAnimation()}>
          Signup
        </Text>
      </Svg>
    );
  }
}

// <Svg height="100%" width="100%">
//   <Defs>
//     <LinearGradient id="prefix__b">
//       <Stop offset="5%" stopColor="#009284" />
//       <Stop offset="95%" stopColor="#32ded488" />
//     </LinearGradient>
//   </Defs>
//
//   <Path
//     opacity={0.7}
//     d="M-0.84,68.58 C149.99,150.00 126.12,-4.44 501.97,63.64 L500.00,150.00 L0.00,150.00 Z"
//     fill="url(#prefix__b)"
//   />
//   <Path
//     opacity={0.7}
//     d="M-1.41,32.06 C81.55,-24.17 321.95,166.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//     fill="url(#prefix__b)"
//   />
// </Svg>
