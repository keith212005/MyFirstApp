import React from 'react';
import {StyleSheet} from 'react-native';

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
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 50,
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
  },
});
