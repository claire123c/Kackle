import React, { useState, useEffect } from 'react';
import dbQuery from '../db/index.js';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Buttons from './Buttons.js';
import Card from './Card.js';
import OverlayLabel from './OverlayLabel.js';
import Location from './Location.js';

export default function Main({ businesses, getBusinesses }) {
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
      setCurrentFood(foodInfo[index]);
    }
  }

  const addFood = async (status) => {
    const { id, name, image_url, state, phone, price, rating, url } = currentFood;
    const query = `INSERT INTO restaurants (id, name, image_url, state, phone, price, rating, url, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const data = [id, name, image_url, state, phone, price, rating, url, status];
    const response = await dbQuery(query, data);
    console.log(response);
  }

  const onSwipeRight = async () => {
    await addFood('LIKE');
    nextImage();
  };

  const superLiked = async () => {
    await addFood('SUPERLIKE');
    nextImage();
  };

  const onSwipeLeft = () => {
    nextImage();
  };

  const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 90
  };

  return (
    <View style={styles.container}>
      <Location />
      <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} config={config}>
      <Card currentFood={currentFood}/>
      </GestureRecognizer>
      <Buttons onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} superLiked={superLiked}/>
    </View>
  );
}