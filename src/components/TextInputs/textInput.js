import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default textInput = ({
  value,
  editable,
  iconName,
  iconSize,
  placeholder,
  secureTextEntry,
  onChange,
  keyboardType,
}) => {
  return (
    <View style={styles.searchSection}>
      <FontAwesome
        style={styles.searchIcon}
        name={iconName}
        color="#05375a"
        size={iconSize ? iconSize : 20}
      />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChange(text)}
        underlineColorAndroid="transparent"
        editable={editable === false ? false : true}
        keyboardType={keyboardType === 'numeric' ? 'numeric' : null}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
