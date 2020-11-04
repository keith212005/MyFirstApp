import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default textInput = ({
  value,
  placeholder,
  secureTextEntry,
  onChange,
}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry == true ? true : false}
      value={value}
      onChangeText={(text) => onChange({text})}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: -16,
    paddingLeft: 20,
    color: '#05375a',
  },
});
