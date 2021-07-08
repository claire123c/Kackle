import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello ChrisJacked</Text>
      <Main />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
}

