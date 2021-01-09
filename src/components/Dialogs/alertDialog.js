import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  colors,
  commonStyle,
} from '@resource';

import {localize} from '@languages';

export default class AlertDialog extends React.PureComponent {
  render() {
    const {
      showDialog,
      onPress,
      message,
      onPressCancel,
      shouldCancel,
    } = this.props;
    return (
      <Modal visible={showDialog} animationType="fade" transparent={true}>
        <TouchableOpacity
          style={styles.container}
          onPress={shouldCancel ? onPressCancel : onPress}>
          <View style={styles.dialogCenter}>
            {!shouldCancel && (
              <Text style={[styles.title]}>{localize('ALERT')}</Text>
            )}

            <Text style={[styles.message]}>{message}</Text>
            <View style={styles.buttonContainer}>
              {shouldCancel && (
                <Pressable onPress={onPressCancel}>
                  <Text style={[styles.title]}>{localize('CLOSE')}</Text>
                </Pressable>
              )}
              <Pressable onPress={onPress}>
                <Text style={[styles.title]}>
                  {shouldCancel ? localize('GO_TO_SETTING') : localize('OK')}
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogCenter: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    width: responsiveWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: responsiveWidth(3),
  },
  title: {
    textAlign: 'center',
    padding: responsiveHeight(2),
  },
  message: {
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: responsiveWidth(1),
    paddingTop: responsiveHeight(3),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
