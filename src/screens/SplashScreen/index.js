import React from 'react';
import {View, Image} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {actionCreaters} from '@actions';
import MySwiper from '@components';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    props.addNetworkListener();
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Swiper');
      // this.props.navigation.replace(
      //   this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
      // );
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
