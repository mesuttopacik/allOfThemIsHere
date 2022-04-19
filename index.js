/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

AppRegistry.registerComponent(appName, () => App);
