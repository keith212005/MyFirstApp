import React from 'react';
import {
  View,
  Text,
  BackHandler,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import {localize} from '@languages';
import {styles} from './style';
import {actionCreaters} from '@actions';
import * as Constant from '@constants';

class Setting extends React.Component {
  state = {
    stateOfLocale: this.props.language,
  };

  handleOnClick = (label) => {
    const {navigation} = this.props;
    switch (label) {
      case localize('CHANGE_LANGUAGE'):
        return navigation.navigate('Language');
      case localize('OTHER_SETTINGS'):
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
            {localize('SETTING')}
          </Card.Title>

          {this.Item(localize('CHANGE_LANGUAGE'))}

          <Card.Divider />

          {this.Item(localize('OTHER_SETTINGS'))}
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
