import React from 'react';
import GoogleMapReact from 'google-map-react'; 
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";


function Map({places, coordinates, setCoordinates, setBounds, setChildClicked}) { 
    // const classes = useStyles();
    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates} 
                center={coordinates}
                defaultZoom={11}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => { 
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={((child) => setChildClicked(child))}
            >
                {places?.map((place, index) => (
                    <div key={index} className='w-40 h-auto p-3 bg-white border'
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}>
                        <div elevation={3} style={{height: 'auto', width: 'auto', background: 'white !important'}}>
                            <img
                                alt={place.name}
                                className='w-full h-full'
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            />
                            <div className='text-xs font-medium font-montserrat'>{place.name}</div>
                            <Rating
                  className='text-yellow-500 mt-0.5 ml-1'
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />} 
                      initialRating={place.rating}
                      fractions={2}
                    />
                        </div>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;