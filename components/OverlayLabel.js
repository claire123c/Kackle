import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';
import styles from '../assets/styles/index.js';

export default function OverlayLabel({ label, color }) {

  return (
    <View style={[styles.overlayLabel, { borderColor: color }]}>
      <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
    </View>
  )
}

OverlayLabel.propTypes = {
  label: string.isRequired,
  color: string.isRequired,
}


