import React from 'react';
import {
  View,
  Text,
  BackHandler,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import * as RNLocalize from 'react-native-localize';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {I18n} from '@languages';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {styles} from './style';
import {actionCreaters} from '@actions';
import * as Constant from '@constants';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfLocale: props.language,
    };
    I18n.locale = this.state.stateOfLocale;
  }

  handleOnClick = (label) => {
    switch (label) {
      case I18n.t('ChangeLanguage'):
        console.log('lang');
        this.props.navigation.navigate('Language');
        break;
      case I18n.t('OtherSettings'):
        console.log('other');
        break;
      default:
    }
  };

  Item = (value) => {
    return (
      <Pressable
        style={styles.pressable}
        activeOpacity={0.6}
        underlayColor="#818181"
        onPress={() => this.handleOnClick(value)}>
        <Text style={styles.listItem}>{value}</Text>
      </Pressable>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Card containerStyle={{width: '90%'}}>
          <Card.Title style={styles.screenTitle}>
            {I18n.t('Setting')}
          </Card.Title>

          {this.Item(I18n.t('ChangeLanguage'))}

          <Card.Divider />

          {this.Item(I18n.t('OtherSettings'))}
        </Card>
      </SafeAreaView>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    isOpenFirstTime: state.isOpenFirstTime.status,
    autoLoginStatus: state.autoLogin.status,
    language: state.setAppLanguage.language,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Setting);
