import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {colors, getImageName, icon} from '@resource';
import {actionCreaters} from '@actions';

class StartScreen extends React.Component {
  componentDidMount() {
    this.props.changeIsOpenFirstTime(false);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            style={styles.logo}
            resizeMode="contain"
            source={{uri: 'companylogo'}}
          />
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient
              colors={colors.themeButton}
              style={styles.lineargradient}>
              <Text style={styles.textSign}>Get Started</Text>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: icon.forward_white}}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const matchStateToProps = (state) => {
  console.log('StartScreen = ' + JSON.stringify(state));
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(StartScreen);
