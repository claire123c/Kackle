import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import LocationContext from '../contexts/LocationContext.js';
import styles from '../assets/styles/index.js';
import { SearchBar, ListItem } from 'react-native-elements';

export default function NewLocation( props) {
  const { location, setLocation } = useContext(LocationContext);

  const [search, useSearch] = useState('');
  const [past, setPast] = useState(['San Francisco', 'Chicago']);


  const updateSearch = (search) => {
    useSearch(search);
    setLocation(search);
  };

  const addPast = (recent) => {
    setPast(() => {
      past.push(recent);
      return past;
    })
  }

  return (
  <View>
    <SearchBar placeholder="Search Location" lightTheme="true" value={search} onChangeText={updateSearch} containerStyle={styles.searchBar} inputContainerStyle={styles.searchBarInput}/>
    <Text style={styles.pastSearchesTitle}>
      Past Searches
    </Text>
    {past.map((item) => (
      <ListItem key={item}>
        <ListItem.Title>
          {item}
        </ListItem.Title>
      </ListItem>
    ))}
  </View>
  );
};