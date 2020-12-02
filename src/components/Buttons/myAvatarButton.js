import React from 'react';
import {Text} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

import {colors, commonStyle} from '@resource';

export default class MyAvatarButton extends React.Component {
  render() {
    return (
      <>
        <Avatar
          rounded
          source={{uri: this.props.source}}
          icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
          containerStyle={{backgroundColor: colors.white}}
          size="medium"
          onPress={this.props.onPress}>
          <Accessory size={18} onPress={this.props.onPress} />
        </Avatar>
        <Text style={[commonStyle.errorStyle]}>
          {this.props.isError ? this.props.error_text : null}
        </Text>
      </>
    );
  }
}
