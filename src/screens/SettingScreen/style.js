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
  itemContainer: {
    padding: 15,
    width: Resource.deviceWidth,
  },
  screenTitle: {
    fontSize: 24,
    padding: 10,
  },
  itemTitle: {fontSize: 18, color: Resource.colors.gray},
  itemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: Resource.colors.gray,
  },
});

export {styles};
