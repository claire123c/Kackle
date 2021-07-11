import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements'
import styles from '../assets/styles/index.js';
import { dbQuery, dbExecute } from '../db/index.js';
import PropTypes from 'prop-types';


export default function List({ search }) {

  const [ superlikes, setSuperLikes ] = useState([]);
  const [ likes , setLikes ] = useState([]);

  const getMyRestaurants = async () => {
    const queryLikes = `SELECT * FROM restaurants WHERE status = 'LIKE'`;
    const querySuperLikes = `SELECT * FROM restaurants WHERE status = 'SUPERLIKE'`;

    try {
      var likeResults = await dbExecute(queryLikes);
    } catch (error) {
      console.error(error);
    }
    try {
      var superLikeResult = await dbExecute(querySuperLikes);
    } catch (error) {
      console.error(error);
    }

    setLikes(likeResults.rows);
    setSuperLikes(superLikeResult.rows);
  }

  const filterOnSearch = (list = []) => {
    if (search !== '') {
      return list.filter(({ name }) => (
        name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ))
    } else {
      return list;
    }
  }

  const deleteFood = async (id) => {
    const query = `DELETE FROM restaurants WHERE id = ?`;

    try {
      let result = await dbExecute(query, [id]);
      getMyRestaurants();
    } catch (error) {
      console.error(error);
    }
  }

  const displayLikes = (likesArr = []) => {
    let filtered = filterOnSearch(likesArr);
    return filtered.map(({ name, id, image_url, price }) => (
      <ListItem.Swipeable key={id}
        rightContent={
          <Button
            title="Delete"
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            onPress={() => {deleteFood(id)}}
          />
        }>
        <Avatar source={{uri: image_url}} avatarStyle={styles.avatar}/>
        <ListItem.Content>
          <ListItem.Title>
            {name}
          </ListItem.Title>
          <ListItem.Subtitle>
            {price}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
        </ListItem.Swipeable>
    ))
  }

  const displaySuperLikes = (superLikesArr = []) => {
    let filtered = filterOnSearch(superLikesArr);
    return filtered.map(({ name, id, image_url, price }) => (
      <ListItem.Swipeable key={id}
        rightContent={
          <Button
            title="Delete"
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            onPress={() => {deleteFood(id)}}
          />
        }>
         <Avatar source={{uri: image_url}} avatarStyle={styles.avatar}/>
         <ListItem.Content>
          <ListItem.Title>
            {name}
          </ListItem.Title>
          <ListItem.Subtitle>
            {price}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    ))
  }

  // useEffect(() => {
  //   getMyRestaurants();
  // }, []);

  useEffect(() => {
    getMyRestaurants();
  }, [search]);

  return (
    <View>
      {displaySuperLikes(superlikes)}
      {displayLikes(likes)}
    </View>
  );
}

List.propTypes = {
  search: PropTypes.string
}

List.defaultProps = {
  search: '',
}

