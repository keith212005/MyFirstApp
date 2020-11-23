import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet, Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fontFamily, responsiveWidth} from '@resource';
import {commonStyle} from '@constants';

export default class MyDatePicker extends React.Component {
  state = {
    date: new Date(),
    mode: this.props.modeType,
    show: false,
    dobs: this.props.value.toString(),
  };

  render() {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({
        show: Platform.OS === 'ios',
        date: currentDate,
        dobs:
          this.state.date.getDate() +
          '-' +
          (this.state.date.getMonth() + 1) +
          '-' +
          this.state.date.getFullYear(),
      });
      this.props.onSuccess(this.state.dobs);
    };

    const showMode = (currentMode) => {
      this.setState({
        show: true,
        mode: currentMode,
      });
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };
    return (
      <>
        <Pressable onPress={() => showDatepicker()}>
          <View style={styles.container}>
            <FontAwesome
              style={styles.searchIcon}
              size={26}
              color={colors.gray}
              name="calendar"
            />
            <Text style={styles.dob}>{this.state.dobs}</Text>

            {this.state.show && (
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
        {this.props.isError ? (
          <Text style={commonStyle.errorStyle}>{this.props.error_text}</Text>
        ) : null}
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
    borderRadius: 5,
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
});
