import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Button } from 'react-native';

import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';

const Stack = createStackNavigator()

const homeOptions = {
  headerRight: () => (
    <Button title='YOYO'/>
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
