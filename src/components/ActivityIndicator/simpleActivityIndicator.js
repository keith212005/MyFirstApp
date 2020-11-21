import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  ActivityIndicator,
} from 'react-native';

import {IconButton, Button, Card, Title, Paragraph} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar, Accessory} from 'react-native-elements';

import {COLORS, FONTFAMILY, responsiveHeight} from '@resource';

export default class SimpleActivityIndicator extends Component {
  render() {
    return (
      <>
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.props.onRequestClose(false)}
          visible={true}
          presentationStyle="overFullScreen">
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.modalSubContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.halfTransparent,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.RobotoMedium,
    color: COLORS.grayFont,
  },
  modalSubContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  cardStyle: {
    paddingHorizontal: 5,
  },
  errorStyle: {
    color: COLORS.red,
    fontFamily: FONTFAMILY.RobotoItalic,
  },
});
