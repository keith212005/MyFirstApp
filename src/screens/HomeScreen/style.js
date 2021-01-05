import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: (insets) => ({
    flex: 1,
    justifyContent: 'center',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  }),
});
