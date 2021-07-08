import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default function Main() {
  const sampleImages = [require("../assets/chicken.jpeg"), require("../assets/icon.png") ]
  const [ foodImages ] = useState(sampleImages)

  const onSwipeRight = () => {
    //yes
    alert('right!')
  };

  const onSwipeLeft = () => {
    //no
    alert('left!')
  };

  return (
    <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
       <Image source={sampleImages[0]} style={styles.main}/>
    </GestureRecognizer>
  );
}