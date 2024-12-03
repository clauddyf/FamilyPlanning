/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '@react-native-firebase/app';

const App = () => {
  useEffect(() => {
    // Initialize Firebase when the app is loaded
    if (!firebase.apps.length) {
      firebase.initializeApp();
    }
  }, []);

  return (
    <View>
      <Text>Welcome to the Family Planning App</Text>
    </View>
  );
};

export default App;
