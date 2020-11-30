import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './style';
import {connect} from 'react-redux';

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

class Splash extends React.Component {
  componentDidMount() {
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

export default connect(matchStateToProps)(Splash);
