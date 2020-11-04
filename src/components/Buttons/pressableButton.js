import React, {useState} from 'react';
import {StyleSheet, Text, Alert, Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default textInput = ({title, route}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button}
      android_ripple={{color: '#3498db'}}
      onPress={() => navigation.navigate(route)}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    borderRadius: 5,
    padding: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#6200EE',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
});
