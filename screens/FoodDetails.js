import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from '../assets/styles/index.js';
import Key from '../config.js';
import PropTypes from 'prop-types';


export default function FoodDetails({ route }) {
  const obj = {
    image_url: ''
  }
  const id = route.params;
  const [ biz, setBiz ] = useState(obj);
  const { name, image_url, phone, url, review_count, rating } = biz;

  const getBizDeets = async () => {
    try {
      let response = await fetch(`https://api.yelp.com/v3/businesses/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Key.API_KEY}`,
        },
      });
      let json = await response.json();
      setBiz(json);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getBizDeets();
  }, [route]);

  console.log(image_url);

  return (
  <View>
    <Text>
      {name}
    </Text>
    <Avatar.Image source={{uri: image_url}}/>
  </View>
  );
};

FoodDetails.propTypes = {
  image_url: PropTypes.string
};

FoodDetails.defaultProps = {
  image_url: ''
}