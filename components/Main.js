import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default function Main({ businesses }) {
  const sampleImages = [require("../assets/chicken.jpeg"), require("../assets/icon.png") ]
  const [foodImages, setFoodImages] = useState(businesses.businesses)
  const imageIndex = 0;
  const [currentImage, setCurrentImage] = useState(foodImages[0].image_url);

  useEffect(() => {
    setFoodImages(businesses.businesses)
  }, [businesses])

  console.log(currentImage);

  const nextImage = () => {
    //last image?
    setCurrentImage[imageIndex + 1];
  }

  const onSwipeRight = () => {
    //yes
    nextImage();
    alert('right!')
  };

  const onSwipeLeft = () => {
    //no
    alert('left!')
  };

  return (
    <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
       <Image source={currentImage} style={styles.main}/>
    </GestureRecognizer>
  );
}