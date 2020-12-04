import React from 'react';
import {View, Image} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {actionCreaters} from '@actions';
import NetInfo from '@react-native-community/netinfo';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // console.log(actionCreaters);
  }
  componentDidMount() {
    // autoLogin is true go to Home Screen else to Start screen
    // NetInfo.addEventListener((connectionInfo) => {
    //   console.log('Connection type', connectionInfo.type);
    //   console.log('Is connected?', connectionInfo.isConnected);
    // });

    this.props.addNetworkListener();
    setTimeout(() => {
      this.props.navigation.replace(
        this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
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
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Splash);
