import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import List from './components/List'
import Map from './components/Map';
import { getPlaces } from './api/index';

function App() {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null)

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
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <List childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            places={places}
            setPlaces={setPlaces} />
        </div>
        <div className="col-span-9">
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
