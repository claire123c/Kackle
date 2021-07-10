import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'
import styles from '../assets/styles/index.js';
import executeQuery from '../db/index.js';


export default function List() {

  // const getMyRestaurants = async () => {
  //   const query = `SELECT * FROM restaurants`;

  //   let result = await executeQuery(query);

  //   console.log(result, 'yo');
  //   return result;
  // }


  // useEffect(() => {
  //   console.log(getMyRestaurants(), 'yo');

  // }, []);

  return (
    <View>
      <ListItem>
        <ListItem.Title>
          Restaurant 1
        </ListItem.Title>
      </ListItem>
      <ListItem>
        <ListItem.Title>
          Restaurant 2
        </ListItem.Title>
      </ListItem>
      <ListItem>
        <ListItem.Title>
          Restaurant 3
        </ListItem.Title>
      </ListItem>
      <ListItem>
        <ListItem.Title>
          Restaurant 4
        </ListItem.Title>
      </ListItem>
    </View>
  );
}

