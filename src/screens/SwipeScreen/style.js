import {StyleSheet, Dimensions} from 'react-native';
import * as Resource from '@resource';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Resource.colors.primary,
    width: DEVICE_WIDTH,
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
