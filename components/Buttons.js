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
      {/* <FAB settings={{
          icon: props => <Feather name="x" {...props} />,
        }}/> */}
      <Button buttonStyle={styles.button} title={<FAB icon='heart' style={styles.x} color='#3b7' />}/>

{/*
      <Button onPress={onSwipeLeft} buttonStyle={styles.button} containerStyle={styles.buttonContainer} raised={true} title={<Feather name="x" style={styles.x} />}/>
      <Button buttonStyle={styles.button} title={<AntDesign name="star" style={styles.star} />}/>
      <Button buttonStyle={styles.button} title={<FontAwesome name="heart" style={styles.like} onPress={onSwipeRight}/>}/> */}

    </View>
  );
}

