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

});

export {styles};
