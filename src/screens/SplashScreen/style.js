import React from 'react';
import {StyleSheet} from 'react-native';

import {
  screenHeight,
  screenWidth,
  responsiveHeight,
  responsiveWidth,
} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
});
