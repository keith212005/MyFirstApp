import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet, Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, responsiveWidth} from '@resource';

export default class MyDatePicker extends React.Component {
  state = {
    date: new Date(),
    mode: this.props.modeType,
    show: false,
    dobs: this.props.dobValue.toString(),
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
              color={COLORS.gray}
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    padding: 14,
    marginTop: 6,
  },
  dob: {
    marginLeft: 10,
    color: COLORS.gray,
    fontSize: 20,
    textAlign: 'center',
    // borderWidth: 1,
  },
});

// import React, {useState} from 'react';
// import {View, Text, Platform, StyleSheet, Pressable} from 'react-native';
//
// import DateTimePicker from '@react-native-community/datetimepicker';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {COLORS, responsiveWidth} from '@resource';
//
// export default myDatePicker = ({onSuccess, modeType, visible, dobValue}) => {
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//
//   const [dobs, setDobs] = useState(dobValue.toString());
//
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//     setDobs(
//       date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear(),
//     );
//     const formattedDate = onSuccess(dobs);
//   };
//
//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };
//
//   const showDatepicker = () => {
//     showMode('date');
//   };
//
//   const showTimepicker = () => {
//     showMode('time');
//   };
//
//   return (
//     <>
//       <Text style={styles.title}>Date of Birth</Text>
//       <Pressable onPress={showTimepicker}>
//         <View style={styles.container}>
//           <FontAwesome
//             style={styles.searchIcon}
//             name="calendar"
//             color={COLORS.gray}
//             size={26}
//           />
//           <Text style={styles.dob}>{dobs}</Text>
//
//           {show && (
//             <>
//               <DateTimePicker
//                 testID="dateTimePicker"
//                 value={date}
//                 mode={modeType}
//                 is24Hour={true}
//                 display="default"
//                 onChange={onChange}
//               />
//             </>
//           )}
//         </View>
//       </Pressable>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: COLORS.gray,
//     padding: 14,
//   },
//   title: {
//     marginTop: 5,
//     fontWeight: '700',
//   },
//   dob: {
//     marginLeft: 10,
//     color: COLORS.gray,
//     fontSize: 20,
//     textAlign: 'center',
//     // borderWidth: 1,
//   },
// });
