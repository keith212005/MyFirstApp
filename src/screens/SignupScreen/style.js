import React from 'react';
import {StyleSheet} from 'react-native';

import {fontFamily, colors, responsiveHeight, responsiveWidth} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: colors.white,
    fontFamily: fontFamily.PacificoRegular,
    fontSize: responsiveHeight(10),
  },
  footer: {
    flex: 6,
    backgroundColor: colors.white,
    borderTopLeftRadius: responsiveHeight(5),
    borderTopRightRadius: responsiveHeight(5),
  },
  scrollView: {
    paddingHorizontal: responsiveHeight(5),
    marginTop: responsiveHeight(1),
  },
});
