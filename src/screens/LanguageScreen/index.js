import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import {Button} from 'react-native-elements';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {styles} from './style';

import {I18n} from '@languages';
import {actionCreaters} from '@actions';
import * as Constant from '@constants';
import * as Components from '@components';
import * as Resource from '@resource';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage:
        this.props.language === '' ? undefined : this.props.language,
    };
  }

  handleLanguageChange = (newValue) => {
    this.setState({selectedLanguage: newValue}, () => {
      this.props.setAppLanguage(this.state.selectedLanguage);
      I18n.locale = newValue;
      this.props.autoLoginStatus
        ? this.props.navigation.pop()
        : this.props.navigation.navigate('Login');
    });
  };

  renderItem = ({item}) => {
    return (
      <>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => this.handleLanguageChange(item.code)}>
          <View style={styles.renderItemContainer}>
            <Text style={{fontSize: 18}}>{item.language}</Text>
            {this.state.selectedLanguage === item.code ? (
              <Image
                style={{width: 20, height: 20}}
                source={{uri: Resource.icon.ok}}
              />
            ) : null}
          </View>
        </TouchableHighlight>
      </>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Select Language</Text>
        </View>
        <FlatList
          data={Constant.getLanguages}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.code}
          ItemSeparatorComponent={ItemSeparator}
        />
      </SafeAreaView>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    language: state.setAppLanguage.language,
    autoLoginStatus: state.autoLogin.status,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Language);
