import React from 'react';
import {View, Text, BackHandler, StyleSheet, Button} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {styles} from './style';
import {actionCreaters} from '@actions';
import * as Components from '@components';

class Profile extends React.Component {
  render() {
    const {insets, navigation} = this.props;
    return (
      <View style={styles.container(insets)}>
        <Components.CustomHeader
          title="Profile"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <Components.MyWave />
      </View>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    insets: state.setSafeAreaInsets.insets,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Profile);
