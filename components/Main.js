import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Buttons from './Buttons.js';
import Card from './Card.js';


export default function Main({ businesses, getBusinesses }) {
  const sampleImages = [require("../assets/chicken.jpeg"), require("../assets/icon.png") ]
  const [foodInfo, setFoodInfo] = useState(businesses.businesses)
  const [imageIndex, setImageIndex] = useState(0);
  const [currentFood, setCurrentFood] = useState(foodInfo[imageIndex]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setFoodInfo(businesses.businesses);
    setImageIndex(0);
  }, [businesses])

  useEffect(() => {
    setCurrentFood(foodInfo[0])
  }, [foodInfo])

  const nextImage = () => {
    if (imageIndex >= 19) {
      let newOffset = offset + 20;
      setOffset(newOffset);
      getBusinesses(newOffset);
    } else {
      let index = imageIndex + 1;
      setImageIndex(index)
      setCurrentFood(foodInfo[index].image_url);
    }
  }

  const onSwipeRight = () => {
    //yes
    nextImage();
  };

  const onSwipeLeft = () => {
    //no
    nextImage();
  };

  // const config = {
  //   velocityThreshold: 0.2,
  //   directionalOffsetThreshold: 90
  // };

  return (
    <View style={styles.container}>
      {/* <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} config={config}> */}
      <Card currentImage={currentFood.image_url}/>
      {/* </GestureRecognizer> */}
      <Buttons onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}/>
    </View>
  );
}