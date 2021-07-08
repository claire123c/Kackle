import React from 'react';
import { Text, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'
import styles from '../assets/styles/index.js';

export default function List() {
  return (
    <View>
      <ListItem>
        <ListItem.Title>
          Restaurant 1
        </ListItem.Title>
      </ListItem>
      <Text>Restaurant 1</Text>
      <Text>Restaurant 2</Text>
      <Text>Restaurant 3</Text>
    </View>
  );
}

