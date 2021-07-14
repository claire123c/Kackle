import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from '../assets/styles/index.js';
import { SearchBar, ListItem } from 'react-native-elements';

export default function NewLocation( { route }) {
  const { location, setLocation } = route.params;
  const [search, useSearch] = useState('');
  const [past, setPast] = useState(['Hawaii', 'Chicago']);

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
    <SearchBar placeholder="Search" lightTheme="true" value={search} onChangeText={updateSearch} containerStyle={styles.searchBar} inputContainerStyle={styles.searchBarInput}/>
    <Text style={styles.pastSearchesTitle}>
      Past Searches
    </Text>
    {past.map((item) => (
      <ListItem>
        <ListItem.Title>
          {item}
        </ListItem.Title>
      </ListItem>
    ))}
  </View>
  );
};