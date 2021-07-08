import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import Header from '../components/Header.js';

export default function Home( {navigation}) {
  return (
    <View style={styles.container}>
      <Text>Restaurant Name</Text>
      <Main />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
};

