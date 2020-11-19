import React from 'react';
import {StyleSheet} from 'react-native';

import {FONTFAMILY, COLORS, responsiveWidth, responsiveHeight} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: responsiveWidth(2),
  },
  headerTitleText: {
    color: COLORS.white,
    fontSize: responsiveHeight(10),
    fontFamily: FONTFAMILY.PacificoRegular,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: responsiveHeight(6),
    borderTopRightRadius: responsiveHeight(6),
  },
  scrollView: {
    paddingTop: responsiveHeight(2.5),
    marginHorizontal: responsiveHeight(8),
  },
});
