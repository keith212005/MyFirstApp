import React from 'react';
import {StyleSheet} from 'react-native';

import {responsiveHeight, responsiveWidth, COLORS} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: responsiveHeight(25),
    paddingHorizontal: responsiveHeight(10),
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
  },
});
