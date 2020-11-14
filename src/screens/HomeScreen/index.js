import React from 'react';
import {View, Text, BackHandler} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {styles} from './style';
import * as Components from '@components';

export default class HomeScreen extends React.Component {
  state = {showAlert: false};

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
    return (
      <>
        <Components.CustomHeader
          title="HOME"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        <Components.ExitAppDialog
          showAlert={this.state.showAlert}
          title="Exit"
          content="Are you sure you want to exit?"
          onSuccess={(value) => this.handleSuccess(value)}
        />
      </>
    );
  }
}
