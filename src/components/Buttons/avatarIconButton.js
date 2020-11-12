import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

import {color} from '@resource';

export default class AvatarIconButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Avatar
        rounded
        source={{uri: this.props.source}}
        icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
        containerStyle={{backgroundColor: color.white}}
        size="medium">
        <Accessory size={18} />
      </Avatar>
    );
  }
}

const styles = StyleSheet.create({});
