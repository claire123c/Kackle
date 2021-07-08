import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import Header from '../components/Header.js';

export default function Home( { navigation }) {
  return (
    <View style={styles.container}>
      <Button title={'click'} onPress={() => navigation.navigate('Recs')}/>
      <Text>Restaurant Name</Text>
      <Main />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
};
