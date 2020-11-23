import React from 'react';

import {Avatar, Accessory} from 'react-native-elements';

import {colors} from '@resource';

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
        containerStyle={{backgroundColor: colors.white}}
        size="medium">
        <Accessory size={18} />
      </Avatar>
    );
  }
}
