import React from 'react';
import {View, Image} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {bindNetworkListener} from '@actions';

class Splash extends React.Component {
  componentDidMount() {
    //Listen to internet connection and storing value to connectionState reducer
    this.props.addNetworkListener();

    // autoLogin is true go to Home Screen else to Start screen
    setTimeout(() => {
      this.props.navigation.replace(
        this.props.autoLoginStatus ? 'DrawerNavigator' : 'Start',
      );
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
  bindActionCreators(bindNetworkListener, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Splash);
