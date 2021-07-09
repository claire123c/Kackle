import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Buttons from './Buttons.js';


export default function Main({ businesses, getBusinesses }) {
  const sampleImages = [require("../assets/chicken.jpeg"), require("../assets/icon.png") ]
  const [foodImages, setFoodImages] = useState(businesses.businesses)
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(foodImages[imageIndex].image_url);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setFoodImages(businesses.businesses);
    setImageIndex(0);
  }, [businesses])

  useEffect(() => {
    setCurrentImage(foodImages[0].image_url)
  }, [foodImages])

  const nextImage = () => {
    if (imageIndex >= 19) {
      let newOffset = offset + 20;
      setOffset(newOffset);
      getBusinesses(newOffset);
    } else {
      let index = imageIndex + 1;
      setImageIndex(index)
      setCurrentImage(foodImages[index].image_url);
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

  const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 90
  };

  return (
    <View style={styles.homeContainer}>
      <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} config={config}>
        <Image source={{uri: currentImage}} style={styles.mainImage}/>
      </GestureRecognizer>
      <Buttons onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}/>
    </View>
  );
}