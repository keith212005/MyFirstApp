import React from 'react';
import {View, Image} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {actionCreaters} from '@actions';
import MySwiper from '@components';
import {FB} from '@services';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    props.addNetworkListener();
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.isOpenFirstTime === true) {
        this.props.navigation.replace('Swiper');
      } else {
        this.props.navigation.replace(
          this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
        );
        FB.addNotificationListener().then(
          (message) => {
            console.log('notify in splash>>', message);
            if (message) {
              this.props.navigation.navigate(message.data.Screen);
            }
          },
          (error) => {
            console.log('splash errr : ', error);
          },
        );
      }
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
    isOpenFirstTime: state.isOpenFirstTime.status,
    autoLoginStatus: state.autoLogin.status,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Splash);
