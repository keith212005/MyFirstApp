import React from 'react';
import {View, Text, BackHandler} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {connect} from 'react-redux';

import {styles} from './style';
import {commonStyle} from '@constants';
import * as Components from '@components';

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(Action.removeAutoLogin()),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }

  componentDidMount() {
    this._unsubscribefocus = this.props.navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this._unsubscribeblur = this.props.navigation.addListener('blur', () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    });
  }

  componentWillUnmount() {
    this._unsubscribefocus();
    this._unsubscribeblur();
  }

  handleBackButton = () => {
    this.setState({showAlert: true});
    return true;
  };

  handleSuccess = (value) => {
    this.setState({showAlert: false});
    value ? BackHandler.exitApp() : null;
  };

  render() {
    if (this.props.autoLoginStatus) {
      return (
        <>
          <Components.CustomHeader
            title="HOME"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />

          <View style={[commonStyle.containerFlex1]}>
            <Text
              style={{
                textAlign: 'center',
                borderWidth: 1,
                borderColor: 'blue',
              }}>
              Welcome
            </Text>
            <Components.ExitAppDialog
              showAlert={this.state.showAlert}
              title="Exit"
              content="Are you sure you want to exit?"
              onSuccess={(value) => this.handleSuccess(value)}
            />
          </View>
        </>
      );
    } else {
      return null;
    }
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Home);
