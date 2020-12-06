import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

import {styles} from './style';
import * as Resource from '@resource';
import {BackgroundCarousel} from '@components';

export default class Swiper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarousel {...this.props} />
      </View>
    );
  }
}
