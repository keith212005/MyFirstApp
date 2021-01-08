import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Modal,
  Alert,
  PermissionsAndroid,
  Linking,
  Platform,
} from 'react-native';

import {isEqual} from 'lodash';
import {IconButton, Button, Card, Title, Paragraph} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar, Accessory} from 'react-native-elements';
import {
  openSettings,
  request,
  RESULTS,
  PERMISSIONS,
} from 'react-native-permissions';

import {colors, fontFamily, responsiveHeight} from '@resource';
import {DP} from '@services';

export default class UploadImage extends Component {
  state = {
    isVisible: this.props.isVisible,
  };

  handleDeniedPermission = (e) => {
    console.log(e);
    if (e.toString() === 'Error: Required permission missing') {
      Alert.alert(
        'Permission denied',
        'My First App need to access your camera and storage, without this permission the ' +
          'app is unable to take photos. Go to App permissions and enable camera and storage permissions.',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'Go to settings', onPress: () => Linking.openSettings()},
        ],
        {cancelable: false},
      );
    } else if (e.toString() === 'Error: Cannot run camera on simulator') {
      Alert.alert(
        'This device does not have a camera.',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  };

  handleCamera = () => {
    this.props.dismiss();
    DP.checkCameraPermission().then(
      (result) => {
        console.log(result);
      },
      (error) => {
        if (error === 'blocked') {
          console.log('sdfsdf', error);
          Alert.alert(
            'Requesting Camera Permission',
            'Please allow access to camera in the settings.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  this.props.dismiss();

                  // openSettings().catch(() => console.warn('cannot open setting'));
                },
              },
            ],
            {cancelable: false},
          );
        }
      },
    );
    // DP.checkCameraPermission().then(
    //   (result) => {
    //     ImagePicker.openCamera({
    //       cropping: true,
    //       width: 500,
    //       height: 500,
    //       cropperCircleOverlay: true,
    //       compressImageMaxWidth: 640,
    //       compressImageMaxHeight: 480,
    //       freeStyleCropEnabled: true,
    //       includeBase64: true,
    //     })
    //       .then((image) => {
    //         var uri = image.path;
    //         this.props.onSuccess(uri);
    //       })
    //       .catch((e) => {
    //         this.handleDeniedPermission(e);
    //       });
    //   },
    //   (error) => {
    //     console.log('uploadimage.js', error);
    //     if (error === 'denied') {
    //       request(PERMISSIONS.IOS.CAMERA).then().catch();
    //     } else if (error === 'blocked') {
    //       Alert.alert(
    //         'Requesting Camera Permission',
    //         'Please allow My First App to access camera.',
    //         [
    //           {
    //             text: 'Cancel',
    //             onPress: () => console.log('Cancel Pressed'),
    //             style: 'cancel',
    //           },
    //           {
    //             text: 'OK',
    //             onPress: () => {
    //               openSettings().catch(() =>
    //                 console.warn('cannot open setting'),
    //               );
    //             },
    //           },
    //         ],
    //         {cancelable: false},
    //       );
    //     }
    //   },
    // );
  };

  handleGallery = () => {
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
        this.props.dismiss();
      })
      .catch((e) => {
        this.handleDeniedPermission(e);
        this.props.dismiss();
      });
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
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <View style={styles.modalSubContainer}>
                  <View style={{padding: 10}}>
                    <Card
                      elevation={20}
                      style={styles.cardStyle}
                      onPress={() => this.handleCamera()}>
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
                    <Card
                      elevation={20}
                      style={styles.cardStyle}
                      onPress={() => this.handleGallery()}>
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
