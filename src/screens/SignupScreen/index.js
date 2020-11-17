import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

import {ImageSelectModal, SignupForm} from '@components';
import {styles} from './style';
import {COLORS} from '@resource';

export default class SignupScreen extends React.Component {
  state = {
    isVisible: false,
  };
  toggleShow = () => {
    this.setState((state) => ({isVisible: !this.state.isVisible}));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            {/*
            <View style={styles.imageContainer}>
              {this.state.isVisible ? (
                <View style={{height: 0, width: 0}}>
                  <ImageSelectModal
                    isVisible={this.state.isVisible}
                    onRequestClose={(value) =>
                      this.setState({isVisible: false})
                    }
                    dismiss={() => this.setState({isVisible: false})}
                    onSuccess={(image) => {
                      this.setState({isVisible: false, avatarSource: image});
                    }}
                  />
                </View>
              ) : null}
              <Avatar
                rounded
                source={{uri: this.state.avatarSource}}
                icon={{name: 'user', type: 'font-awesome', color: 'gray'}}
                containerStyle={{backgroundColor: COLORS.white}}
                size="medium"
                onPress={() => this.toggleShow()}>
                <Accessory size={18} onPress={() => this.toggleShow()} />
              </Avatar>
            </View>
            */}
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.headerText}>Sign Up</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <ScrollView
              style={styles.scrollView}
              keyboardShouldPersistTaps="handled">
              <SignupForm {...this.props} />
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}
