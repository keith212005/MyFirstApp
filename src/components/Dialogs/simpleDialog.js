import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  FadeAnimation,
} from 'react-native-popup-dialog';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Responsive from '@helpers';
import ImagePicker from 'react-native-image-crop-picker';

export default simpleDialog = ({onSuccess}) => {
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState(onSuccess);

  handleCamera = () => {
    console.log('camera');
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
        onSuccess(uri);
      })
      .catch((e) => {
        console.log('error in simpleDialog.js');
        console.log(e);
      });
    setVisible(false);
  };

  handleStorage = () => {
    console.log('storage clicked');
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
        onSuccess(image.path);
      })
      .catch((e) => console.log(e));
    setVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.btnUpload} onPress={() => setVisible(true)}>
            Choose Image
          </Text>
        </View>
        <Dialog
          visible={visible}
          dialogAnimation={
            new FadeAnimation({
              initialValue: 0, // optional
              animationDuration: 400, // optional
              useNativeDriver: true, // optional
            })
          }
          footer={
            <>
              <View style={styles.footerContainer}>
                <MaterialIcons
                  name="camera"
                  size={80}
                  color="white"
                  onPress={() => handleCamera()}
                />
                <MaterialIcons
                  name="storage"
                  size={80}
                  color="white"
                  onPress={() => handleStorage()}
                />

                <DialogFooter>
                  <Text></Text>
                  <Text></Text>
                </DialogFooter>
              </View>
            </>
          }
          onTouchOutside={() => {
            setVisible(false);
          }}>
          <DialogContent style={styles.dialogContentContainer}>
            <Text style={styles.dialogContentText}>Choose</Text>
          </DialogContent>
        </Dialog>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: '#009387',
    width: Responsive.widthPercentageToDP('70%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUpload: {
    width: Responsive.widthPercentageToDP('30%'),
    height: Responsive.widthPercentageToDP('30%'),
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnUpload: {
    marginTop: 5,
    color: '#fff',
    alignItems: 'center',
  },
  dialogContentContainer: {
    height: 40,
  },
  dialogContentText: {
    marginTop: Responsive.heightPercentageToDP('1%'),
    textAlign: 'center',
    fontSize: 20,
  },
});
