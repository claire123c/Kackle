import React from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';


export default function Main() {
  return (
    <View>
       <Image source={require("../assets/chicken.jpeg")} style={styles.main}/>
    </View>
  );
}