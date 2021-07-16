import React, { useState, useEffect } from 'react';
import { dbQuery, dbExecute } from '../db/index.js';
import { View, Image } from 'react-native';
import styles from '../assets/styles/index.js';
import emptyData from '../emptyData.js';
import PropTypes from 'prop-types';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Buttons from './Buttons.js';
import Card from './Card.js';
import OverlayLabel from './OverlayLabel.js';
import Location from './Location.js';

export default function Main({ businesses, getBusinesses, location }) {
  const [foodInfo, setFoodInfo] = useState(businesses.businesses)
  const [imageIndex, setImageIndex] = useState(0);
  const [currentFood, setCurrentFood] = useState(foodInfo[imageIndex]);
  const [offset, setOffset] = useState(0);
  const { location: { city, state } } = currentFood;

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
    const checkQuery = `SELECT * FROM restaurants WHERE id = ?`;
    const query = `INSERT INTO restaurants (id, name, image_url, state, phone, price, rating, url, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const data = [id, name, image_url, state, phone, price, rating, url, status];

    let check;
    try {
      check = await dbQuery(checkQuery, [id]);
      console.log(check);
    } catch(error) {
      throw error;
    }

    if (check.rows.length === 0) {
      try {
        const response = await dbQuery(query, data);
      } catch (error) {
        throw error;
      }
    }
  }

  const onSwipeRight = async () => {
    try {
      await addFood('LIKE');
    } catch (error) {
      throw error;
    }
    nextImage();
  };

  const superLiked = async () => {
    try {
      await addFood('SUPERLIKE');
    } catch (error) {
      throw error;
    }
    nextImage();
  };

  const onSwipeLeft = async () => {
    // try {
    //   await addFood('DISLIKE');
    // } catch (error) {
    //   throw error;
    // }
    nextImage();
  };

  const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 90
  };

  return (
    <View style={styles.container}>
      <GestureRecognizer onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} config={config}>
      <Card currentFood={currentFood}/>
      </GestureRecognizer>
      <Location city={city} state={state}/>
      <Buttons onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} superLiked={superLiked}/>
    </View>
  );
}

Main.propTypes = {
  businesses: PropTypes.object
}

Main.defaultTypes = {
  businesses: emptyData,
  foodInfo: emptyData.businesses,
}