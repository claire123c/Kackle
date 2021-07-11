import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import styles from '../assets/styles/index.js';
import dbQuery from '../db/index.js';
import PropTypes from 'prop-types';


export default function List({ search }) {

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

  const filterOnSearch = (list = []) => {
    if (search !== '') {
      return list.filter(({ name }) => (
        name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ))
    } else {
      return list;
    }
  }

  const displayLikes = (likesArr = []) => {
    let filtered = filterOnSearch(likesArr);
    console.log(filtered)
    return filtered.map(({ name, id}) => (
      <ListItem key={id}>
        <ListItem.Title>
          {name}
        </ListItem.Title>
      </ListItem>
    ))
  }

  const displaySuperLikes = (superLikesArr = []) => {
    return filterOnSearch(superLikesArr.map(({ name, id }) => (
      <ListItem key={id}>
        <ListItem.Title>
          {name}
        </ListItem.Title>
      </ListItem>
    )))
  }

  useEffect(() => {
    getMyRestaurants();
  }, []);

  useEffect(() => {
    getMyRestaurants();
  }, [search])

  return (
    <View>
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

