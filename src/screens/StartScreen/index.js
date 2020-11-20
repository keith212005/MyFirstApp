import React from 'react';
import {View, Image} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import {styles} from './style';
import {LinearGradientButton} from '@components';
import {responsiveHeight, responsiveWidth} from '@resource';

// source={{
//   uri:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI24dS95Qbsm9tEZWPse8sxyrLQuzM-7MQqg&usqp=CAU',
// }}

export default class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={{uri: 'asset:/images/companylogo.png'}}
          />
        </View>
        <View style={styles.footer}>
          {DeviceInfo.isTablet() ? (
            <>
              <View style={styles.btnContainer}>
                <LinearGradientButton
                  title="Sign In"
                  onPress={() => this.props.navigation.navigate('LOGIN_SCREEN')}
                  height={responsiveHeight(10)}
                />
              </View>
              <View style={styles.btnContainer}>
                <LinearGradientButton
                  title="Sign up"
                  onPress={() =>
                    this.props.navigation.navigate('SIGNUP_SCREEN')
                  }
                  height={responsiveHeight(10)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.btnContainer}>
                <LinearGradientButton
                  title="Sign In"
                  onPress={() => this.props.navigation.navigate('LOGIN_SCREEN')}
                  height={responsiveHeight(12)}
                />
              </View>
              <View style={styles.btnContainer}>
                <LinearGradientButton
                  title="Sign up"
                  onPress={() =>
                    this.props.navigation.navigate('SIGNUP_SCREEN')
                  }
                  height={responsiveHeight(12)}
                />
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
}
