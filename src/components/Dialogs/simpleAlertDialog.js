import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

import {responsiveHeight, colors} from '@resource';

export default class SimpleAlertDialog extends React.Component {
  render() {
    let props = this.props;
    return this.props.showAlert ? (
      <AwesomeAlert
        show={props.showAlert}
        showProgress={false}
        title={props.title ? props.title : 'title'}
        message={props.content ? props.content : 'content'}
        closeOnTouchOutside={
          props.closeOnTouchOutside ? props.closeOnTouchOutside : true
        }
        closeOnHardwareBackPress={
          props.closeOnHardwareBack ? props.PresscloseOnHardwareBackPress : true
        }
        showCancelButton={
          props.showCancelButton ? props.showCancelButton : false
        }
        showConfirmButton={true}
        cancelText={props.cancelText ? props.cancelText : 'Cancel'}
        confirmText={props.confirmText ? props.confirmText : 'OK'}
        confirmButtonColor={colors.primary}
        onCancelPressed={() => {
          this.props.onCancelPressed();
        }}
        onConfirmPressed={() => {
          this.props.onConfirmPressed();
        }}
      />
    ) : null;
  }
}

const styles = StyleSheet.create({});
