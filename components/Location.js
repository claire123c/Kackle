import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../assets/styles/index.js';

export default function Location({ city, country }) {
  return (
    <View>
      <Text style={styles.location}>{city}, {country}</Text>
    </View>
  );
}

