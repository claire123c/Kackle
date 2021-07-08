import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Recs' component={Recs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
