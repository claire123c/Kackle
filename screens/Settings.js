import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Slider, SearchBar, ListItem, Divider } from 'react-native-elements';
import { Switch } from 'react-native-paper';
import { Animated } from 'react-native';

import styles from '../assets/styles/index.js';


export default function Settings({ navigation }) {
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [maxDistance, setMaxDistance] = useState(0);

  const changeVegan = () => {
    setVegan(!vegan);
  }
  const changeVegetarian = () => {
    setVegetarian(!vegetarian);
  }
  const changeDistance = (value) => {
    setMaxDistance(value);
  }

  return (
  <ScrollView>
    <Text style={styles.settingsText}>ACCOUNT SETTINGS</Text>
    <ListItem className="phone">
      <ListItem.Content>
        <ListItem.Title>Phone Number</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <Divider/>
    <ListItem className="email">
      <ListItem.Content>
        <ListItem.Title>Email</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <Text style={styles.settingsText}>DISCOVERY</Text>
    <ListItem className="location">
      <ListItem.Content>
        <ListItem.Title>Location</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <Text>Maximum Distance {maxDistance} miles</Text>
    <Slider
      value={maxDistance} onValueChange={changeDistance} minimumValue={0}
      maximumValue={10000}
      thumbStyle={styles.thumbStyleSettings}
      trackStyle={styles.trackStyleSettings}
      step={5}
      minimumTrackTintColor="#FF2D55"
      maximumTrackTintColor="#757E90"
    />
    <Divider/>
    <ListItem className="vegan">
      <ListItem.Content>
        <ListItem.Title>Vegan</ListItem.Title>
      </ListItem.Content>
      <Switch value={vegan} onValueChange={changeVegan} color="#FF2D55"/>
    </ListItem>
    <Divider/>
    <ListItem className="vegetarian">
      <ListItem.Content>
        <ListItem.Title>Vegetarian</ListItem.Title>
      </ListItem.Content>
      <Switch value={vegetarian} onValueChange={changeVegetarian}color="#FF2D55"/>
    </ListItem>
    <ListItem className="distance">
      <ListItem.Content>
        <ListItem.Title>Categories</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <Divider/>
    <ListItem className="allergies">
      <ListItem.Content>
        <ListItem.Title>Allergies</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>

    <Text style={styles.settingsText}>PREMIUM</Text>
    <ListItem className="premium">
      <ListItem.Content>
        <ListItem.Title>Kackle Premium</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <StatusBar style="auto" />
  </ScrollView>
  );
};