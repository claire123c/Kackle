import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../assets/styles/index.js';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Buttons({ onSwipeLeft, onSwipeRight }) {
  return (
    <View style={styles.buttonContainer}>
      <Button onPress={onSwipeLeft} buttonStyle={styles.button} title={<Feather name="x" style={styles.x} />}/>
      <Button buttonStyle={styles.button} title={<AntDesign name="star" style={styles.star} />}/>
      <Button buttonStyle={styles.button} title={<FontAwesome name="heart" style={styles.like} onPress={onSwipeRight}/>}/>

    </View>
  );
}

