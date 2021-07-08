import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import MainStackNavigator from './navigators/MainStackNavigator.js';


export default function App() {


  return (
    <MainStackNavigator/>
  );
}

