import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
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

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage:
        this.props.language === '' ? undefined : this.props.language,
    };
  }

  ItemSeparator = () => <View style={styles.itemSeparator} />;

  handleValue = (newValue) => {
    console.log('new : ', newValue);
    this.setState({selectedLanguage: newValue}, () => {
      this.props.setAppLanguage(this.state.selectedLanguage);
      this.props.navigation.goBack();
    });
  };

  renderItem = ({item}) => {
    return (
      <>
        <TouchableHighlight onPress={() => this.handleValue(item.code)}>
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
      <>
        <View style={styles.container}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Select Language</Text>
          </View>
          <FlatList
            data={Constant.getLanguages}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.code}
            ItemSeparatorComponent={this.ItemSeparator}
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
