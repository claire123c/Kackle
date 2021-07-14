import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../assets/styles/index.js';
import { Entypo } from '@expo/vector-icons';


export default function Location({ city, state }) {
  return (
    <View style={styles.locationContainer}>
      <Entypo name="location-pin" color="#757E90" size={16}/>
      <Text style={styles.locationText}>{city}, {state}</Text>
    </View>
  );
}

