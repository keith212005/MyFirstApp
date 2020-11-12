import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import * as Helper from '@helpers';
import {responsiveHeight, responsiveWidth} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
  },
  signIn: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  textSign: {
    color: '#fff',
    fontSize: 17,
  },
});
