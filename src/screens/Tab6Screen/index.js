import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {lowerCase} from 'lodash';

import * as Components from '@components';
import {localize} from '@languages';
import {users_field_object} from '@constants';
import {FireDB} from '@storage';
import {responsiveHeight, colors, fontFamily} from '@resource';
import {styles} from './style';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const Item = ({name, email, phone}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{email}</Text>
    <Text style={styles.title}>{phone}</Text>
  </View>
);

export default class Tab6 extends Component {
  state = {...users_field_object, data: []};

  componentDidMount() {
    FireDB.getUsers().then((result) => {
      console.log('result>>> ', result);
      this.setState({data: result});
    });
  }

  getData(label) {
    console.log(label);
    switch (label) {
      case localize('NAME'):
        return {
          isError: this.state.Name.isError,
          error_text: this.state.Name.error_text,
          value: this.state.Name.value,
        };
      case localize('EMAIL'):
        return {
          isError: this.state.Email.isError,
          error_text: this.state.Email.error_text,
          value: this.state.Email.value,
        };
      case localize('PHONE'):
        return {
          isError: this.state.Phone.isError,
          error_text: this.state.Phone.error_text,
          value: this.state.Phone.value,
        };
      default:
        break;
    }
  }

  myTextInput = (label) => {
    const data = this.getData(lowerCase(label));
    return (
      <Components.RoundTextInput
        placeholder={label}
        value={this.state.Name.value}
        onChangeText={(text) => {
          this.setState({
            name: text,
          });
        }}
      />
    );
  };

  renderItem = ({item}) => (
    <Item name={item.name} email={item.email} phone={item.phone} />
  );

  render() {
    return (
      <SafeAreaView>
        <Components.CustomHeader
          title="Tab 6 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />

        <KeyboardAwareScrollView>
          {this.myTextInput(localize('NAME'))}
          {this.myTextInput(localize('EMAIL'))}
          {this.myTextInput(localize('PHONE'))}
          <View style={{marginBottom: 20}}>
            <Components.LinearGradientButton
              title={localize('SUBMIT')}
              onPress={() => {}}
              height={responsiveHeight(10)}
              fontSize={16}
              borderRadius={50}
              fillColor={colors.themeButton}
              fontColor={colors.white}
              fontFamily={fontFamily.RobotoBold}
            />
          </View>

          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
