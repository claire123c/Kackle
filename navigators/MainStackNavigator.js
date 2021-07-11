import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styles from '../assets/styles/index.js';
import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';
import Settings from '../screens/Settings.js';

const Stack = createStackNavigator();
const SCREEN1 = 'Kackle';
const SCREEN2 = 'Future Eats';
const SCREEN3 = 'Settings';

export default function MainStackNavigator() {

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name={SCREEN1} component={Home}/>
        <Stack.Screen name={SCREEN2} component={Recs} />
        <Stack.Screen name={SCREEN3} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
