import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../assets/styles/index.js';
import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';

const Stack = createStackNavigator()
const homeOptions = {
  headerRight: () => (
    <MaterialCommunityIcons name="food-drumstick" style={styles.drumstick}/>
  )
};

export default function MainStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={homeOptions}/>
        <Stack.Screen name='Recs' component={Recs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
