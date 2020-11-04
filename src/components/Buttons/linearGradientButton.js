import React, {useState} from 'react';
import {StyleSheet, Text, Alert, Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default linearGradientButton = ({title, route}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
      <Text style={styles.textSign}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signIn: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  textSign: {
    color: '#fff',
    fontSize: 17,
  },
});
