import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './assets/styles/index.js';

import Buttons from './components/Buttons.js';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Hello ChrisJacked</Text>
      <Image source={require("./assets/chicken.jpeg")} style={styles.main}/>
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
}

