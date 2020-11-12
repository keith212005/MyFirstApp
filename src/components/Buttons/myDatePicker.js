import React, {useState} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default myDatePicker = ({onSuccess, modeType, visible}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const formattedDate = onSuccess(
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear(),
    );
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}>
      <FontAwesome
        style={styles.searchIcon}
        name="calendar"
        color="#05375a"
        size={20}
        onPress={showTimepicker}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={modeType}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
