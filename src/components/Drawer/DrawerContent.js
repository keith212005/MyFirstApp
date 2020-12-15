import React, {useState} from 'react';
import {View, StyleSheet, Alert, Image} from 'react-native';

import {DB} from '@storage';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {icon} from '@resource';
import {actionCreaters} from '@actions';

class DrawerContent extends React.Component {
  state = {
    isDarkTheme: false,
    showAlert: true,
  };

  toggleTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    });
  };

  handleExitApp = () => {
    this.props.navigation.closeDrawer();
    Alert.alert(
      'My First App',
      'Are you sure you want to exit?',
      [
        {
          text: 'NO',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            this.props.removeAutoLogin();
            this.props.navigation.replace('Login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  handleDeleteAccount = () => {
    // delete account
    // DB.deleteAccount();
  };

  handleOnPressNavItems = (label) => {
    switch (label) {
      case 'Home':
        this.props.navigation.navigate(label);
        break;
      case 'Setting':
        this.props.navigation.navigate(label);
        break;
      case 'Delete account':
        this.handleDeleteAccount();
        break;
      case 'Sign out':
        this.handleExitApp();
        break;
      default:
        break;
    }
  };

  drawerItem = (extraProps) => {
    return (
      <DrawerItem
        icon={({color, size}) => (
          <Image
            style={{height: size, width: size}}
            resizeMode="contain"
            source={{uri: extraProps.icon}}
          />
        )}
        label={extraProps.label}
        onPress={() => {
          this.handleOnPressNavItems(extraProps.label);
        }}
      />
    );
  };

  render(props) {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU',
                  }}
                  size={50}
                />
                <View style={{marginLeft: 15}}>
                  <Title style={styles.title}>Ketan Jingar</Title>
                  <Caption style={styles.caption}>@kJingar</Caption>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    80
                  </Paragraph>
                  <Caption>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    100
                  </Paragraph>
                  <Caption>Followers</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              {this.drawerItem({label: 'Home', icon: icon.home})}
              {this.drawerItem({label: 'Profile', icon: icon.user_outlined})}
              {this.drawerItem({label: 'Bookmarks', icon: icon.bookmark})}
              {this.drawerItem({label: 'Setting', icon: icon.settings})}
              {this.drawerItem({label: 'Support', icon: icon.tech_support})}
            </Drawer.Section>

            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  this.toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={this.state.isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
          {this.drawerItem({label: 'Delete account', icon: icon.denied})}
        </Drawer.Section>

        <Drawer.Section style={styles.bottomDrawerSection}>
          {this.drawerItem({label: 'Sign out', icon: icon.exit})}
        </Drawer.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {flex: 1},
  userInfoSection: {paddingLeft: 20},
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(DrawerContent);
