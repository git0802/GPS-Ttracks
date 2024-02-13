import { useState } from 'react';
import axios from 'axios';
import { FaLocationArrow } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          sendGPSData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log('Error getting location:', error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const sendGPSData = async (latitude: number, longitude: number) => {
    try {
      await axios.post('http://localhost:8080/gps', {
        latitude,
        longitude,
      });

      console.log('GPS data sent successfully');
    } catch (error: any) {
      console.error('Error sending GPS data:', error.message);
    }
  };

  return (
    <div className="app-container">
      <h1>GPS Tracker</h1>
      <p>Click the button to get your current location</p>
      <button className="get-location-btn" onClick={getLocation}>
        Get Location <FaLocationArrow />
      </button>
      {latitude && longitude && (
        <p className="location-info">
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      )}

      <div className="image-container">
        <img
          className="background-image"
          src="/images/satellite.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default App;
