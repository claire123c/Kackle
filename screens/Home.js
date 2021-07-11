import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Key from '../config.js';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import sampleData from '../sampleData.js';

export default function Home({ navigation }) {
  const [businesses, setBusinesses] = useState(sampleData);
  const [location, setLocation] = useState('New York');

  const getBusinesses = async (offset = 0) => {
    if (offset > 980) {
      return null;
    } else {
      try {
        let response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&offset=${offset}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${Key.API_KEY}`,
          },
        });
        let json = await response.json();
        setBusinesses(json);
      } catch (error) {
        console.error('Error', error);
      }
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
      <Main businesses={businesses} getBusinesses={getBusinesses} />
      <StatusBar style="auto" />
    </View>
  );
};

