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
  },
  headerText: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.PacificoRegular,
    fontSize: 40,
  },
  footer: {
    flex: 6,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollView: {
    paddingHorizontal: 35,
    padding: 10,
    marginTop: 30,
  },

  field_group: {
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorMsg: {
    color: COLORS.errormessage,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});