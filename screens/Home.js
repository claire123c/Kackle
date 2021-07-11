import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Key from '../config.js';
import { FontAwesome } from '@expo/vector-icons';

import styles from '../assets/styles/index.js';
import Buttons from '../components/Buttons.js';
import Main from '../components/Main.js';
import sampleData from '../sampleData.js';
import fox from '../assets/fox.png';

const SCREEN1 = 'Kackle';
const SCREEN2 = 'Future Eats';
const SCREEN3 = 'Settings';

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
      // headerTitle: () => (
      //   <Text style={styles.kackleText}></Text>
      //   // <Image source={fox} style={styles.logo}/>
      // ),
      headerRight: () => (
        <MaterialCommunityIcons name="food-drumstick" style={styles.drumstick} onPress={() => navigation.navigate(SCREEN2)}/>
      ),
      headerLeft: () => (
        <FontAwesome name="sliders" style={styles.settings} onPress={() => navigation.navigate(SCREEN3)} />
        // <Ionicons name="md-settings-sharp" style={styles.settings} onPress={() => navigation.navigate('Settings')}/>
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

