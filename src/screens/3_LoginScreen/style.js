import React from 'react';
import {StyleSheet} from 'react-native';

import {responsiveWidth} from '@resource';
import {fontfamily} from '@resource';

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollView: {
    padding: 20,
  },
  headerTitleText: {
    color: '#fff',
    fontSize: 40,
    fontFamily: fontfamily.PacificoRegular,
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
