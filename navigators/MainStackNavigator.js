import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../assets/styles/index.js';
import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';
import Settings from '../screens/Settings.js';

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Kackle' component={Home} />
        <Stack.Screen name='Recs' component={Recs} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
