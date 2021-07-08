import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import $ from 'jquery';
import Key from '../config.js';


import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import Header from '../components/Header.js';
import sampleData from '../sampleData.js';

var cors_proxy = require('cors-anywhere');

$.ajaxPrefilter(function(options) {
  if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

export default function Home({ navigation }) {
  const [businesses, setBusinesses] = useState(sampleData);
  const [location, setLocation] = useState('New York');

  const getBusinesses = (offset = 0) => {
    if (offset > 980) {
      return null;
    } else {
      $.ajax({
        url: `https://api.yelp.com/v3/businesses/search?location=${location}&offset=${offset}`,
        type: 'GET',
        dataType: 'json',
        headers: {
          Authorization: `Bearer ${Key.API_KEY}`,
        },
        success: (data) => {
          setBusinesses(data);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  useEffect(() => {
    //getBusinesses();
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons name="food-drumstick" style={styles.drumstick} onPress={() => navigation.navigate('Recs')}/>
      ),
      headerLeft: () => (
        <Ionicons name="md-settings-sharp" style={styles.settings} onPress={() => navigation.navigate('Settings')}/>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Restaurant Name</Text>
      <Main businesses={businesses} getBusinesses={getBusinesses}/>
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
};

