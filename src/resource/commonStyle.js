import {StyleSheet} from 'react-native';
import {colors, fontFamily, responsiveWidth} from '@resource';

export const commonStyle = StyleSheet.create({
  errorStyle: {
    color: colors.red,
    fontFamily: fontFamily.RobotoItalic,
  },
  primaryText: {
    color: colors.primary,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlex1: {
    flex: 1,
  },
});
