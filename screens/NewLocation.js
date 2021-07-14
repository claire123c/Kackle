import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from '../assets/styles/index.js';
import { SearchBar } from 'react-native-elements';

export default function NewLocation() {
const [search, useSearch] = useState('');

  const updateSearch = (search) => {
    useSearch(search);
  };

  return (
  <View>
    <SearchBar placeholder="Search" lightTheme="true" value={search} onChangeText={updateSearch} containerStyle={styles.searchBar} inputContainerStyle={styles.searchBarInput}/>
  </View>
  );
};