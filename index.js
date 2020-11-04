import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigator from './src/index';
import Main from './src/index';

AppRegistry.registerComponent(appName, () => Main);
