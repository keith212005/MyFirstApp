import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
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
import {
  IconButton,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

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
          <Button
            compact={true}
            uppercase={false}
            icon="upload"
            mode="contained"
            style={styles.btnUpload}
            theme={{
              colors: {primary: '#007387'},
              roundness: 10,
            }}
            contentStyle={{height: 30}}
            onPress={() => setVisible(true)}>
            Image
          </Button>
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
                <View style={{padding: 10}}>
                  <Card elevation={20}>
                    <Card.Actions>
                      <IconButton
                        icon="camera-plus-outline"
                        color={'#009387'}
                        size={40}
                        onPress={() => handleCamera()}
                      />
                    </Card.Actions>
                  </Card>
                </View>

                <View style={{padding: 10}}>
                  <Card elevation={20}>
                    <Card.Actions>
                      <IconButton
                        icon="folder-multiple-image"
                        color={'#009387'}
                        size={40}
                        onPress={() => handleStorage()}
                      />
                    </Card.Actions>
                  </Card>
                </View>

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
            <Text style={styles.dialogContentText}></Text>
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
    // backgroundColor: '#009387',
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
    color: 'white',
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
