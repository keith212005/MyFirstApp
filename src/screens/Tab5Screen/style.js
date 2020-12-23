import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
  },
  actionContainer: {
    justifyContent: 'center',
  },

  button: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  author: {
    textAlign: 'center',
    fontSize: 14,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export {styles};
