import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';

import {IconButton, Button, Card, Title, Paragraph} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar, Accessory} from 'react-native-elements';

import {colors, fontFamily, responsiveHeight} from '@resource';

export default class ImageSelectModal extends Component {
  state = {
    isVisible: this.props.isVisible,
  };

  render() {
    return (
      <>
        {this.state.isVisible ? (
          <Modal
            animationType={'fade'}
            transparent={true}
            onRequestClose={() => this.props.onRequestClose(false)}
            visible={this.state.isVisible}
            presentationStyle="overFullScreen">
            <TouchableWithoutFeedback onPress={this.props.dismiss}>
              <View style={styles.modalContainer}>
                <View style={styles.modalSubContainer}>
                  <View style={{padding: 10}}>
                    <Card elevation={20} style={styles.cardStyle}>
                      <Card.Actions>
                        <View>
                          <IconButton
                            icon="camera-plus-outline"
                            color={colors.primary}
                            size={40}
                            onPress={() => this.handleCamera()}
                          />
                          <Text style={styles.titleText}>Camera</Text>
                        </View>
                      </Card.Actions>
                    </Card>
                  </View>

                  <View style={{padding: 10}}>
                    <Card elevation={20} style={styles.cardStyle}>
                      <Card.Actions>
                        <View>
                          <IconButton
                            icon="folder-multiple-image"
                            color={colors.primary}
                            size={40}
                            onPress={() => this.handleGallery()}
                          />
                          <Text style={styles.titleText}>Gallery</Text>
                        </View>
                      </Card.Actions>
                    </Card>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        ) : null}
      </>
    );
  }

  handleCamera = () => {
    this.props.dismiss();
    ImagePicker.openCamera({
      cropping: true,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      freeStyleCropEnabled: true,
      includeBase64: true,
    })
      .then((image) => {
        var uri = image.path;
        this.props.onSuccess(uri);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleGallery = () => {
    this.props.dismiss();
    ImagePicker.openPicker({
      cropping: true,
      width: 300,
      height: 400,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true,
    })
      .then((image) => {
        var uri = image.path;
        this.props.onSuccess(uri);
      })
      .catch((e) => console.log(e));
  };
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.halfTransparent,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: fontFamily.RobotoMedium,
    color: colors.grayFont,
  },
  modalSubContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  cardStyle: {
    paddingHorizontal: 5,
  },
  errorStyle: {
    color: colors.red,
    fontFamily: fontFamily.RobotoItalic,
  },
});
