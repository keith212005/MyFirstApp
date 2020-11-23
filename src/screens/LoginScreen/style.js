import React from 'react';
import {StyleSheet} from 'react-native';

import {fontFamily, colors, responsiveWidth, responsiveHeight} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: responsiveWidth(2),
  },
  headerTitleText: {
    color: colors.white,
    fontSize: responsiveHeight(10),
    fontFamily: fontFamily.PacificoRegular,
  },
  footer: {
    flex: 2,
    backgroundColor: colors.white,
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
    borderColor: colors.primary,
    marginTop: 15,
    borderWidth: 1,
  },
  forgotpasswordtext: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'right',
  },

  login_fail_alert: {
    color: colors.red,
    textAlign: 'center',
    marginTop: 5,
  },
  signupBtn: {
    marginBottom: 50,
  },
});
