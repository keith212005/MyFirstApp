import React from 'react';
import {StyleSheet} from 'react-native';

import * as Resource from '@resource';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    color: Resource.colors.gray,
    fontFamily: Resource.fontFamily.RobotoRegular,
  },
  listItem: {
    fontSize: 18,
    color: Resource.colors.gray,
    fontFamily: Resource.fontFamily.RobotoRegular,
  },
  pressable: {
    marginBottom: 10,
  },
});

export {styles};
