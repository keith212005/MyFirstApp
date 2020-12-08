import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    backgroundColor: colors.white,
  },
  titleButton: {
    margin: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    color: colors.primary,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
