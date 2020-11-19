import React from 'react';
import {StyleSheet} from 'react-native';

import {FONTFAMILY, COLORS, responsiveHeight, responsiveWidth} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.PacificoRegular,
    fontSize: responsiveHeight(10),
  },
  footer: {
    flex: 6,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: responsiveHeight(5),
    borderTopRightRadius: responsiveHeight(5),
  },
  scrollView: {
    paddingHorizontal: responsiveHeight(8),
    marginTop: responsiveHeight(5),
  },
});
