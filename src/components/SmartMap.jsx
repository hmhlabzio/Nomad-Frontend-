import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '600px'
};

// Sample mock data
const cities = [
  { id: 1, name: 'Tokyo', lat: 35.6762, lng: 139.6503, emoji: '🌆', stats: 'Population: 14M' },
  { id: 2, name: 'Bali', lat: -8.3405, lng: 115.0920, emoji: '🌴', stats: 'Tourism: High' },
  { id: 3, name: 'Goa', lat: 15.2993, lng: 74.1240, emoji: '🌊', stats: 'Beaches: 30+' }
];

const SmartMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDtnAo4LgB-JmVGDGA0CTUqFF8xovhL4Vg' 
  });

  const [selectedCity, setSelectedCity] = useState(null);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 20.5937, lng: 78.9629 }} // center on India for demo
      zoom={4}
      options={{
        styles: [/* add custom map styles here if needed */],
        disableDefaultUI: true,
        zoomControl: true
      }}
    >
      {cities.map((city) => (
        <Marker
          key={city.id}
          position={{ lat: city.lat, lng: city.lng }}
          icon={{
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // glowing marker
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          onClick={() => setSelectedCity(city)}
        />
      ))}

      {selectedCity && (
        <InfoWindow
          position={{ lat: selectedCity.lat, lng: selectedCity.lng }}
          onCloseClick={() => setSelectedCity(null)}
        >
          <div>
            <h3>{selectedCity.name} {selectedCity.emoji}</h3>
            <p>{selectedCity.stats}</p>
            <button onClick={() => alert(`Details for ${selectedCity.name}`)}>
              View Details
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default SmartMap;