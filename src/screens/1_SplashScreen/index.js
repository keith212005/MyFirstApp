import React from 'react';
import {View, ImageBackground} from 'react-native';
import {styles} from './style';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('START_SCREEN');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <ImageBackground
          style={styles.image}
          source={require('@constants/images/splashscreeen.png')}
        />
      </View>
    );
  }
}
