import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../assets/styles/index.js';
import { Button, Icon } from 'react-native-elements';
import { FAB } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Buttons({ onSwipeLeft, onSwipeRight }) {
  return (
    <View style={styles.buttonsContainer}>
      <Button onPress={onSwipeRight} buttonStyle={styles.button} title={<FAB icon={require('../assets/close.png')} style={styles.x} color='#FF2D55' />}/>
      <Button onPress={onSwipeRight} buttonStyle={styles.button} title={<FAB small icon={require('../assets/star.png')} style={styles.star} color='#3498db' />}/>
      <Button onPress={onSwipeRight} buttonStyle={styles.button} title={<FAB icon='heart' style={styles.like} color='#3b7' />}/>
    </View>
  );
}

