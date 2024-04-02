import React from 'react'
import PlaceDetails from '../components/PlaceDetails'
import { Puff } from 'react-loader-spinner';

function List({type, setType, rating, setRating, places, childClicked}) {
    console.log({childClicked})
  return (
    <div className='p-5'>
      {console.log(places)}
        <div className='font-montserrat text-xl font-medium'>Hotels, Restaurants, Attractions around you</div>
        <div className='flex gap-10 py-4'>
            <form variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <label className='block font-montserrat font-medium'>Type</label>
                <select
                    className='w-full px-1 py-2 rounded mt-2 font-montserrat'
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
                <label className='font-montserrat font-medium'>Rating</label>
                  <select
                    className='w-full px-1 py-2 rounded mt-2 font-montserrat'
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
        {places ? (
            places.map((place) => (
                <PlaceDetails key={place.id} place={place} />
            ))
      ) : (<div      className="absolute top-[35%] right-[15%]">
          <Puff 
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
      </div>)
        }
    </div>
  )
}

export default List;