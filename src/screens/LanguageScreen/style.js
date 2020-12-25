import React from 'react';
import {StyleSheet} from 'react-native';

import * as Resource from '@resource';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: Resource.colors.gray,
    fontSize: 24,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    flex: 8,
    textAlign: 'center',
  },
  nextBtn: {
    flex: 2,
  },
});

export {styles};
