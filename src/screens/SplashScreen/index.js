import React from 'react';
import {View, Image} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {styles} from './style';
import {bindConnectionState} from '@actions';

class Splash extends React.Component {
  componentDidMount() {
    //Listen to internet connection and storing value to connectionState reducer
    NetInfo.addEventListener((state) => {
      this.props.changeConnectionState(state.isConnected);
    });

    // autoLogin is true go to Home Screen else to Start screen
    setTimeout(() => {
      this.props.autoLoginStatus
        ? this.props.navigation.replace('DrawerNavigator')
        : this.props.navigation.replace('Start');
    }, 2000);
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

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(bindConnectionState, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Splash);
