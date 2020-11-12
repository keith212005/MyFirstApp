import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {color, fontfamily} from '@resource';
import {responsiveHeight, responsiveWidth} from '@resource';

export default class LinearGradientButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.tochableopacity}>
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={styles.gradientView}>
            <Text style={styles.text}>{this.props.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(8),
  },
  gradientView: {
    padding: responsiveHeight(4),
    borderRadius: responsiveHeight(2),
    alignItems: 'center',
  },
  text: {
    fontFamily: fontfamily.RobotoBold,
    color: color.white,
    fontSize: 17,
  },
});
