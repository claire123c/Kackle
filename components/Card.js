import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/index.js';

export default function Card({ currentImage }) {
  return (
    <View style={styles.card}>
      <Image source={{uri: currentImage}} style={styles.mainImage}/>
    </View>
  );
}

