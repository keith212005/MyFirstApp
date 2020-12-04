import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Pressable,
  Keyboard,
  Image,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {colors, fontFamily, responsiveWidth, icon} from '@resource';
import {commonStyle} from '@resource';

export default class MyDatePicker extends React.Component {
  state = {
    date: new Date(),
    mode: this.props.modeType,
    visible: this.props.visible,
    dobValue: this.props.value,
  };

  render() {
    const onChange = (event, selectedDate) => {
      if (event.type === 'dismissed') {
        this.setState({
          visible: false,
        });
      }
      if (event.type === 'set') {
        const currentDate = selectedDate || this.state.date;
        this.setState({
          visible: Platform.OS === 'ios',
          date: currentDate,
          dobValue:
            selectedDate.getDate() +
            '-' +
            (selectedDate.getMonth() + 1) +
            '-' +
            selectedDate.getFullYear(),
        });
        this.props.onSuccess(this.state.dobValue);
      }
    };

    const showMode = (currentMode) => {
      this.setState({
        visible: true,
        mode: currentMode,
      });
    };

    const showDatepicker = () => {
      Keyboard.dismiss();
      showMode('date');
    };

    const showTimepicker = () => {
      Keyboard.dismiss();
      showMode('time');
    };
    return (
      <>
        <Text style={styles.label}>Date of Birth</Text>
        <Pressable onPress={() => showDatepicker()}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{uri: icon.calendar}}
            />

            <Text style={styles.dob}>{this.state.dobValue}</Text>

            {this.state.visible && (
              <>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.date}
                  mode={this.state.mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  minimumDate={
                    this.props.minimumDate ? this.props.minimumDate : null
                  }
                  maximumDate={
                    this.props.maximumDate ? this.props.maximumDate : null
                  }
                />
              </>
            )}
          </View>
        </Pressable>

        <Text style={commonStyle.errorStyle}>
          {this.props.isError ? this.props.error_text : null}
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    textAlign: 'center',
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
