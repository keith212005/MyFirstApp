import React from 'react';
import {StyleSheet} from 'react-native';

import {fontfamily, responsiveHeight, responsiveWidth} from '@resource';

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontFamily: fontfamily.PacificoRegular,
    fontSize: 40,
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
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
    color: 'red',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
