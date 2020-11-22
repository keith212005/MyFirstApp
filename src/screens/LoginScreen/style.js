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
    paddingTop: 30,
    padding: 20,
  },
  signIn: {
    height: responsiveHeight(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.primary,
    marginTop: 15,
    borderWidth: 1,
  },
  forgotpasswordtext: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'right',
  },

  login_fail_alert: {
    color: COLORS.red,
    textAlign: 'center',
    marginTop: 5,
  },
  signupBtn: {
    marginBottom: 50,
  },
});
