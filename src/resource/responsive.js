import React, {Component} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const responsiveWidth = (width) => {
  return (deviceWidth * width) / 100;
};

const responsiveHeight = (height) => {
  return (deviceWidth * height) / 100;
};

export {deviceHeight, deviceWidth, responsiveHeight, responsiveWidth};
