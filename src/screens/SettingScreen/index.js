import React from 'react';
import {View, Text, BackHandler} from 'react-native';

import {styles} from './style';

export default class Setting extends React.Component {
  // componentDidMount() {
  //   this._unsubscribefocus = this.props.navigation.addListener('focus', () => {
  //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  //   });
  //   this._unsubscribeblur = this.props.navigation.addListener('blur', () => {
  //     BackHandler.removeEventListener(
  //       'hardwareBackPress',
  //       this.handleBackButton,
  //     );
  //   });
  // }
  //
  // componentWillUnmount() {
  //   this._unsubscribefocus();
  //   this._unsubscribeblur();
  // }
  //
  // handleBackButton = () => {
  //   console.log('bakc butoon on settings');
  //   this.props.navigation.pop();
  //   return true;
  // };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Setting Screen</Text>
        </View>
      </>
    );
  }
}
