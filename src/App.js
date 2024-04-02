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
  const [ filteredPlaces, setFilteredPlaces] = useState(null)


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



  function filterPlacesWithNamesAndIds(places) { 
    return places.filter(place => place && place.name !== undefined);
  }

  useEffect(() => {
    if (places) {
      const filteredPlacesList = filterPlacesWithNamesAndIds(places);
      console.log({ filteredPlacesList });
      setFilteredPlaces(filteredPlacesList);
    }
  }, [places]);

  return (
    <div className="App">
      <Header setCoordinates={setCoordinates} />
      <div className="grid-cols-1 md:grid grid-cols-8">
        <div className="cols-span-1 md:col-span-5 order-first">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            bounds={bounds}
            setBounds={setBounds}
            places={filteredPlaces}
            setChildClicked={setChildClicked}
          />
        </div>
        <div className="cols-span-1 md:col-span-3" style={{ height: '93vh', width: '100%', overflowY: 'auto' }}>
          <List childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            places={filteredPlaces}
            setPlaces={setPlaces} />
        </div>

      </div>
    </div>
  );
}

export default App;
