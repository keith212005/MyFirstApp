import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '@resource';

export default class ExitAppDialog extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Portal>
            <Dialog visible={this.props.showAlert} dismissable={false}>
              <Dialog.Title>
                <Feather name="log-out" size={34} color={COLORS.primary} />
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>{this.props.content}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  color={COLORS.primary}
                  onPress={() => this.props.onSuccess(true)}>
                  Yes
                </Button>
                <Button
                  color={COLORS.primary}
                  onPress={() => this.props.onSuccess(false)}>
                  No
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
