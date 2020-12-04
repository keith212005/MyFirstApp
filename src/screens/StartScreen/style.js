import React from 'react';
import {StyleSheet} from 'react-native';

import {responsiveHeight, responsiveWidth, colors, fontFamily} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  logo: {
    width: responsiveWidth(28),
    height: responsiveHeight(28),
  },
  title: {
    color: colors.gray,
    fontSize: 30,
    fontFamily: fontFamily.PacificoRegular,
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontFamily: fontFamily.RobotoRegular,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  lineargradient: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    flex: 9,
    textAlign: 'right',
    color: colors.white,
    fontWeight: 'bold',
  },
  image: {
    flex: 3,
    height: 26,
    width: 26,
    marginLeft: 30,
  },
});
