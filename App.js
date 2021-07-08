import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import $ from 'jquery';
import Key from './config.js';

import MainStackNavigator from './navigators/MainStackNavigator.js';

var cors_proxy = require('cors-anywhere');

$.ajaxPrefilter(function(options) {
  if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

export default function App() {
const [businesses, setBusinesses] = useState([]);
const [location, setLocation] = useState('New York')

const getBusinesses = () => {

  $.ajax({
    url: `https://api.yelp.com/v3/businesses/search?location=${location}`,
    type: 'GET',
    dataType: 'json',
    headers: {
      Authorization: `Bearer ${Key.API_KEY}`,
    },
    success: (data) => {
      console.log(data);
      setBusinesses(data);
    },
    error: (error) => {
      console.error(error);
    }
  })

}

useEffect(() => {
  getBusinesses();
}, [])

  return (
    <MainStackNavigator />
  );
}

