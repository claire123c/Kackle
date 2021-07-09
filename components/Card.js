import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../assets/styles/index.js';

import Description from './Description.js';

export default function Card({ currentFood }) {
  const { name, image_url, rating} = currentFood;

  return (
    <View style={styles.card}>
      <Image source={{uri: image_url}} style={styles.mainImage}/>
      {/* <Description name={name} rating={rating}/> */}
    </View>
  );
}

