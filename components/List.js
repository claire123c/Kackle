import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'
import styles from '../assets/styles/index.js';
import dbQuery from '../db/index.js';


export default function List() {
  const [ superlike, setSuperLike ] = useState([]);
  const [ likes , setLikes ] = useState([]);

  const getMyRestaurants = async () => {
    const queryLikes = `SELECT * FROM restaurants WHERE status = 'LIKE'`;
    const querySuperLikes = `SELECT * FROM restaurants WHERE status = 'SUPERLIKE'`;

    let likeResults = await dbQuery(queryLikes);
    let superLikeResult = await dbQuery(querySuperLikes);

    setLikes(likeResults.rows);
    setSuperLike(superLikeResult.rows);
  }

  const displayLikes = (likesArr) => {
    console.log(likesArr)
    return likesArr.map(({ name, id }) => (
      <ListItem key={id}>
        <ListItem.Title>
          {name}
        </ListItem.Title>
      </ListItem>
    ))
  }

  useEffect(() => {
    getMyRestaurants();
  }, []);

  return (
    <View>
      {displayLikes(likes)}
    </View>
  );
}

