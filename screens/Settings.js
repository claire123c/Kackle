import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Slider, SearchBar, ListItem } from 'react-native-elements';
import { Switch } from 'react-native-paper';
import { Animated } from 'react-native';

import styles from '../assets/styles/index.js';


export default function Settings({ navigation }) {

  return (
  <View>
    <Text style={styles.settingsText}>ACCOUNT SETTINGS</Text>
    <ListItem className="phone">
      <ListItem.Content>
        <ListItem.Title>Phone Number</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
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
    <Text>Maximum Distance</Text>
    <Slider/>
    <ListItem className="distance">
      <ListItem.Content>
        <ListItem.Title>Categories</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <Switch value={false}/>
    <StatusBar style="auto" />
  </View>
  );
};