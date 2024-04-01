import React from 'react';
import GoogleMapReact from 'google-map-react'; 
//import RoomIcon from '@mui/icons-material/Room';


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
                    <div key={index} style={{height: '200px', width: '300px' }}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}>
                        <div elevation={3} style={{height: '100px', width: '100px', background: 'white !important'}}>
                            <img
                                alt={place.name}
                                style={{ height: '100px !important', width: '100px !important' }}
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            />
                            <div>{place.name}</div>
                            {/* <Rating size="small" name="read-only" value={place.rating} precision={0.5} readOnly /> */}
                        </div>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;