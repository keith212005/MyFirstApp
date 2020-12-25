import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {RadioButton} from 'react-native-paper';
import {Button} from 'react-native-elements';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';
import {I18n} from '@languages';
import {actionCreaters} from '@actions';
import * as Constant from '@constants';
import * as Components from '@components';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class Language extends Component {
  constructor() {
    super();
    this.handleOnPress = this.handleOnPress.bind(this);
  }
  state = {selectedLanguage: undefined};

  handleOnPress = () => {
    //set language to reducer and go to start screen
    this.props.setAppLanguage(this.state.selectedLanguage);
    this.props.navigation.replace('StartScreen');
  };

  handleValue = (newValue) => {
    console.log('new : ', newValue);
    this.setState({selectedLanguage: newValue});
  };

  renderItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      <Item title={item.language} />
      <RadioButton.Group
        onValueChange={(newValue) => this.handleValue(newValue)}
        value={this.state.selectedLanguage}>
        <RadioButton value={item.code} />
      </RadioButton.Group>
    </View>
  );

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Select Language</Text>
            {this.state.selectedLanguage != undefined ? (
              <View style={styles.nextBtn}>
                <Components.SquareButton
                  title="Next"
                  onPress={this.handleOnPress}
                />
              </View>
            ) : null}
          </View>
          <FlatList
            data={Constant.getLanguages}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.code}
          />
        </View>
      </>
    );
  }
}

const matchStateToProps = (state) => {
  console.log('Swiper Store = ', JSON.stringify(state));
  return {
    language: state.setAppLanguage.language,
    autoLoginStatus: state.autoLogin.status,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Language);
