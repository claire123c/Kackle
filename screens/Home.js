import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import Header from '../components/Header.js';

export default function Home( { navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons name="food-drumstick" style={styles.drumstick} onPress={() => navigation.navigate('Recs')}/>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Restaurant Name</Text>
      <Main />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
};

