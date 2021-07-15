import React, { useState, useContext } from 'react';

const LocationContext = React.createContext('New York');

const LocationInfo = () => {
  const [location, setLocation] = useState('New York')
}