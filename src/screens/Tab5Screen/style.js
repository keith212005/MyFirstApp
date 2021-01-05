import React from 'react';
import {StyleSheet} from 'react-native';

import {colors, fontFamily} from '@resource';

const styles = StyleSheet.create({
  container: (insets) => ({
    flex: 1,
    justifyContent: 'center',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  }),
  author: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.RobotoItalic,
    color: colors.gray,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontFamily.RobotoMediumItalic,
    color: colors.gray,
  },
  lineseperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.gray,
  },
});

export {styles};
