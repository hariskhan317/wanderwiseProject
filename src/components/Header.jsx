import React, { useRef } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

function Header({ setCoordinates }) { 

  const autocompleteRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'] // Assuming 'places' is the library you want to load
  });

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    console.log('Latitude:', lat);
    console.log('Longitude:', lng);
    setCoordinates({ lat, lng });
  };
  

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-between w-full bg-gray-800 pb-4 px-10'>
      <div className='pt-3 font-montserrat text-white font-medium text-3xl'>WANDER WISE</div>
      <Autocomplete
        className='mt-3'
        onPlaceChanged={onPlaceChanged}
        onLoad={onLoad}>

        <input
          type="text"
          placeholder="Search for Tide Information"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '32px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            outline: 'none',
            textOverflow: 'ellipsis',
          }}
        />
      </Autocomplete>
    </div>
  );
}

export default Header;
