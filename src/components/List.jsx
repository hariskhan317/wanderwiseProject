import React from 'react'
import PlaceDetails from '../components/PlaceDetails'
 

function List({type, setType, rating, setRating, places, childClicked}) {
    console.log({childClicked})
  return (
      <div className='p-5'>
        <div className='text-xl font-medium'>Hotels, Restaurants, Attractions around you</div>
        <div className='flex gap-10 py-4'>
            <form variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <label className='block'>Type</label>
                <select
                    className='w-full px-1 py-2 rounded mt-2'
                    value={type}
                    label="Age"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="restaurants">Restaurants</option>
                    <option value="hotels">Hotels</option>
                    <option value="attractions">Attractions</option>
                </select>   
            </form>
            <form variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <label id="demo-simple-select-label">Rating</label>
                  <select
                    className='w-full px-1 py-2 rounded mt-2'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    label="Age"
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value={10}>All</option>
                    <option value={3}>Above 3.0</option>
                    <option value={4}>Above 4.0</option>
                    <option value={4.5}>Above 4.5</option>
                </select>   
            </form>      
        </div>
          {/* card */}  
          {console.log(places)}
        {places ? (
            places.map((place) => (
                <PlaceDetails key={place.id} place={place} />
            ))
          ) : null
            //   (
            // <CircularProgress
            //       variant="indeterminate"
            // sx={{ 
            //     color: '#308fe8',
            //     animationDuration: '550ms',
            //     position: 'absolute',
            //     left: '10%',
            //     top: '50%',
            //     [`& .${circularProgressClasses.circle}`]: {
            //       strokeLinecap: 'round',
            //     },
            //   }}
            //   size={80}
            //   thickness={4}
            //       />
            // )
        }
    </div>
  )
}

export default List;