import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';

import MainStackNavigator from './navigators/MainStackNavigator.js';

export default function App(props) {
  return (
    <MainStackNavigator />
  );
}

