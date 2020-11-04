import React from 'react';
import {StyleSheet, Text, View, Pressable, StatusBar} from 'react-native';

export default App = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text>Login</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
