import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Pressable,
  Keyboard,
  Image,
  Button,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  colors,
  fontFamily,
  responsiveWidth,
  icon,
  commonStyle,
} from '@resource';

import moment from 'moment';

export default class MyDatePicker extends React.Component {
  state = {
    date: new Date(),
    mode: this.props.modeType,
    visible: this.props.visible,
    dobValue: this.props.value,
  };

  onChange = (event, selectedDate) => {
    const {onSuccess} = this.props;
    const currentDate = selectedDate || this.state.date;
    console.log('ketean', event.type);
    if (event.type === 'set') {
      this.setState(
        {
          visible: Platform.OS === 'ios',
          date: currentDate,
          dobValue: moment(selectedDate).format('DD-MM-YYYY'),
        },
        () => onSuccess(moment(selectedDate).format('DD-MM-YYYY')),
      );
    }
    if (Platform.OS === 'ios') {
      this.setState(
        {
          date: currentDate,
          dobValue: moment(selectedDate).format('DD-MM-YYYY'),
        },
        () => onSuccess(moment(selectedDate).format('DD-MM-YYYY')),
      );
    }
  };

  showMode = (currentMode) => {
    this.setState({
      visible: true,
      mode: currentMode,
    });
  };

  showDatepicker = () => {
    Keyboard.dismiss();
    this.showMode('date');
  };

  showTimepicker = () => {
    Keyboard.dismiss();
    this.showMode('time');
  };

  hide = () => {
    this.setState({visible: false}, () => {
      if (this.state.dobValue === 'Date of birth') {
        this.setState({dobValue: moment(new Date()).format('DD-MM-YYYY')});
      }
    });
  };

  render() {
    const {date, mode, dobValue} = this.state;
    const {minimumDate, maximumDate, isError, error_text} = this.props;
    return (
      <>
        <View>
          <Text style={styles.label}>Date of Birth</Text>
          <Pressable onPress={() => this.showDatepicker()}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: icon.calendar_filled}}
              />
              <Text style={styles.dob}>{dobValue}</Text>
            </View>
          </Pressable>
          <Text style={commonStyle.errorStyle}>
            {isError ? error_text : null}
          </Text>
        </View>
        {this.state.visible && (
          <>
            {Platform.OS === 'ios' ? (
              <Button title="OK" onPress={this.hide} />
            ) : null}
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={this.onChange}
              minimumDate={minimumDate ? minimumDate : null}
              maximumDate={maximumDate ? maximumDate : null}
            />
          </>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    padding: 14,
    marginTop: 6,
  },
  dob: {
    marginLeft: 10,

    color: colors.gray,
    fontSize: 16,
  },
  label: {
    fontFamily: fontFamily.RobotoBold,
    color: colors.gray,
  },
  image: {
    height: 22,
    width: 22,
  },
});
