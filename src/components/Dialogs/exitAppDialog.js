import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import {colors, icon, responsiveHeight} from '@resource';

export default class ExitAppDialog extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Portal>
            <Dialog visible={this.props.showAlert} dismissable={false}>
              <Dialog.Title>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  resizeMode="stretch"
                  source={{uri: icon.exit}}
                />
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>{this.props.content}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  color={colors.primary}
                  onPress={() => this.props.onSuccess(true)}>
                  Yes
                </Button>
                <Button
                  color={colors.primary}
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
