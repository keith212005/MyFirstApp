import {StyleSheet, Dimensions} from 'react-native';
import * as Resource from '@resource';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Resource.colors.primary,
    width: Resource.deviceWidth,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Resource.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
