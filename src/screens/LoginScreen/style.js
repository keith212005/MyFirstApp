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
    fontSize: 40,
    fontFamily: FONTFAMILY.PacificoRegular,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: responsiveHeight(6),
    borderTopRightRadius: responsiveHeight(6),
  },
  scrollView: {
    paddingTop: 10,
    marginHorizontal: 30,
  },
});
