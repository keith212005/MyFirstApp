import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('START_SCREEN');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
          }}
        />
      </View>
    );
  }
}
