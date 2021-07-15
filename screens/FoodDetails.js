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
  const [ biz, setBiz ] = useState({});
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
  }, []);

  console.log(image_url);

  return (
    image_url ?
    (<View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          {name}
        </Text>
        <Avatar.Image source={{uri: image_url}}/>
      </View>)
    :(<Text>Loading ...</Text>)
  );
};

FoodDetails.propTypes = {
  image_url: PropTypes.string
};

FoodDetails.defaultProps = {
  image_url: ''
}