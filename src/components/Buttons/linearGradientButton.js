import React, {useState} from 'react';
import {StyleSheet, Text, Alert, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default linearGradientButton = ({title, route, ref}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
        <Text style={styles.textSign} ref={ref}>
          {title}
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  signIn: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textSign: {
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    fontSize: 17,
  },
});
