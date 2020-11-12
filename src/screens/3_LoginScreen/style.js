import React from 'react';
import {StyleSheet} from 'react-native';

import {responsiveWidth} from '@resource';
import {FONTFAMILY, COLORS} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  headerTitleText: {
    color: COLORS.white,
    fontSize: 40,
    fontFamily: FONTFAMILY.PacificoRegular,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  forgotpasswordtext: {
    marginTop: 10,
    color: COLORS.secondary,
    fontWeight: '700',
    textAlign: 'right',
  },
  scrollView: {
    padding: 20,
  },
  field_group: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  errorMsg: {
    color: 'red',
  },
});
