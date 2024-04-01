import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import List from './components/List'
import Map from './components/Map';
import { getPlaces } from './api/index';
import './App.css'

function App() {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlaces(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
      })
      .catch((err) => console.log(err))
  }, [type, bounds]);

  return (
    <div className="App">
      <Header setCoordinates={setCoordinates} />
      <div className="grid grid-cols-7">
        <div className="col-span-2 " style={{ height: '90vh', width: '100%', overflowY: 'auto' }}>
          <List childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            places={places}
            setPlaces={setPlaces} />
        </div>
        <div className="col-span-5">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            bounds={bounds}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
