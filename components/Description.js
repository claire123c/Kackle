import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Description({ name, rating }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

