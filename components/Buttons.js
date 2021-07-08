import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../assets/styles/index.js';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Buttons() {
  return (
    <View>
      <Feather name="x" style={styles.x} />
      <FontAwesome name="heart" style={styles.like}/>
    </View>
  );
}

