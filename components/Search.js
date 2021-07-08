import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../assets/styles/index.js';

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search"/>
    </View>
  );
}

