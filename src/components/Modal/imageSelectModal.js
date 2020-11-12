import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';

import {IconButton, Button, Card, Title, Paragraph} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar, Accessory} from 'react-native-elements';

import {COLORS} from '@resource';

export default class ImageSelectModal extends Component {
  state = {
    isVisible: this.props.isVisible,
  };

  render() {
    return (
      <>
        {this.state.isVisible ? (
          <View style={styles.container}>
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
                      <Card
                        elevation={20}
                        style={{paddingRight: 5, paddingLeft: 5}}>
                        <Card.Actions>
                          <View>
                            <IconButton
                              icon="camera-plus-outline"
                              color={'#009387'}
                              size={40}
                              onPress={() => this.handleCamera()}
                            />
                            <Text style={{textAlign: 'center'}}>Camera</Text>
                          </View>
                        </Card.Actions>
                      </Card>
                    </View>

                    <View style={{padding: 10}}>
                      <Card
                        elevation={20}
                        style={{paddingRight: 5, paddingLeft: 5}}>
                        <Card.Actions>
                          <View>
                            <IconButton
                              icon="folder-multiple-image"
                              color={'#009387'}
                              size={40}
                              onPress={() => this.handleGallery()}
                            />
                            <Text style={{textAlign: 'center'}}>Gallery</Text>
                          </View>
                        </Card.Actions>
                      </Card>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
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
        console.log('error in handlecamera');
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
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.halfTransparent,
  },
  modalSubContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
});
