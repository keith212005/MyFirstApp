import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawerNavigator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {colors} from '@resource';
import * as Screen from '@screens';
import {actionCreaters} from '@actions';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  componentDidMount() {
    console.log('setting safeareaisets **************');
    this.props.setSafeAreaInsets();
  }

  //  extraProps is an object containing name and component as props
  stack = (name) => {
    let screenName =
      name === 'DrawerNavigator' ? DrawerNavigator : Screen[name];

    return (
      <Stack.Screen
        name={name}
        component={screenName}
        options={{
          headerShown: false,
        }}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {this.stack('Splash')}
          {this.stack('Swiper')}
          {this.stack('Language')}
          {this.stack('StartScreen')}
          {this.stack('Login')}
          {this.stack('Signup')}
          {this.stack('DrawerNavigator')}
        </Stack.Navigator>
      </NavigationContainer>
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

export default connect(matchStateToProps, matchDispatchToProps)(StackNavigator);
