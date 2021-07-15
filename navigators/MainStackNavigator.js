import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import styles from '../assets/styles/index.js';
import Home from '../screens/Home.js';
import Recs from '../screens/Recs.js';
import Settings from '../screens/Settings.js';
import NewLocation from '../screens/NewLocation.js';
import LocationContext from '../contexts/LocationContext.js';

const Stack = createStackNavigator();
const SCREEN1 = 'Kackle';
const SCREEN2 = 'Future Eats';
const SCREEN3 = 'Settings';
const SCREEN4 = 'New Location';

const screen3Options = {
  animationEnabled: false
};

export default function MainStackNavigator() {
  const [location, setLocation] = useState('New York');
  const context = {
    location: location,
    setLocation: setLocation
  }

  return (
    <LocationContext.Provider value={context}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name={SCREEN1} component={Home} />
          <Stack.Screen name={SCREEN2} component={Recs} keyboardHandlingEnabled={true}/>
          <Stack.Screen name={SCREEN3} component={Settings} options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          }}/>
          <Stack.Screen name={SCREEN4} component={NewLocation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </LocationContext.Provider>
  )
}
