import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const responsiveWidth = (width) => {
  return (screenWidth * width) / 100;
};

const responsiveHeight = (height) => {
  return (screenWidth * height) / 100;
};

export {screenHeight, screenWidth, responsiveHeight, responsiveWidth};
