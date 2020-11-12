import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {RadioButton, Text} from 'react-native-paper';

export default genderRadioButton = ({onChange, gender}) => {
  const [value, setValue] = React.useState(gender);

  handleClick = (value) => {
    // value === 'male' ? setValue('male') : setValue('female');
    setValue(value);
    onChange(value);
  };

  return (
    <RadioButton.Group
      onValueChange={(value) => handleClick(value)}
      value={value}>
      <View style={styles.container}>
        <RadioButton value="male" />
        <Text>Male</Text>
        <RadioButton value="female" />
        <Text>Female</Text>
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
