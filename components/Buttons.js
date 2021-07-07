import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../assets/styles/index.js';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Buttons() {
  return (
    <View>
      <Feather name="x" size={24} color="black" />
      <FontAwesome name="heart" size={24} style={styles.like}/>
    </View>
  );
}

