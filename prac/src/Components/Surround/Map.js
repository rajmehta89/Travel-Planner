import React from 'react';
import MapContainer from './MapContainer';

const Map = () => {
  // Set the initial position with latitude and longitude
  const initialPosition = { lat: 37.7749, lng: -122.4194 };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer initialPosition={initialPosition} />
    </div>
  );
};

export default Map;
