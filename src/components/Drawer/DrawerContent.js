import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
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
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class DrawerContent extends React.Component {
  state = {
    isDarkTheme: false,
  };

  toggleTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    });
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
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcon
                    name="home-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => {
                  this.props.navigation.navigate('HOME_SCREEN2');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcon
                    name="account-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Profile"
                onPress={() => {
                  this.props.navigation.navigate('PROFILE_SCREEN');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcon
                    name="bookmark-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Bookmarks"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Feather name="settings" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  this.props.navigation.navigate('SETTING_SCREEN');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialIcon
                    name="support-agent"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {}}
              />
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
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcon
                name="exit-to-app"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign out"
          />
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
