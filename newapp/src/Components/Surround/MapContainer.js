import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = (props) => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      const service = new window.google.maps.places.PlacesService(map);

      // Set your desired search parameters
      const request = {
        location: props.initialPosition,
        radius: 1000, // in meters
        type: 'lodging', // for hotels
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    }
  }, [map, props.initialPosition]);

  const handleMarkerClick = (props, marker) => {
    setSelectedPlace(props);
  };

  const handleMapReady = (mapProps, map) => {
    setMap(map);
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={props.initialPosition}
      onReady={handleMapReady}
    >
      {places.map((place) => (
        <Marker
          key={place.place_id}
          name={place.name}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }}
          onClick={handleMarkerClick}
        />
      ))}

      <InfoWindow
        marker={selectedPlace}
        visible={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      >
        <div>
          <h4>{selectedPlace && selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJ0JqAVGTmnOlCSZp4hnurF8zfnfSbwFw',
})(MapContainer);
