import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/index.js';


export default function FoodDetails({ route }) {
  const id = route.params;

  const getBizDeets = () => {

  }

  useEffect(() => {

  }, [route]);

  return (
  <View>
    <Text>
      hi
    </Text>
  </View>
  );
};