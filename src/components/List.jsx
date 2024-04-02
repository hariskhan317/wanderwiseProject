import React, { useState, useEffect, createRef } from 'react'
import PlaceDetails from '../components/PlaceDetails'
import { Puff } from 'react-loader-spinner';

function List({ type, setType, places, childClicked, isLoading }) {

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className='p-5'>
      {console.log({childClicked})}
      <div className='font-montserrat text-xl font-medium'>Hotels, Restaurants, Attractions around you</div>
        {isLoading ? (
            <div className="absolute top-[35%] right-[15%]">
              <Puff 
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}/>
            </div>) : (
            <>
              <div className='flex gap-10 py-4'>
                <form className='w-full'>
                <label className='block font-montserrat font-medium'>Type</label>
                    <select
                    className='w-full h-12 px-1 py-2 rounded mt-2 font-montserrat'
                    value={type}
                    label="Age"
                    onChange={(e) => setType(e.target.value)}
                    >
                      <option value="restaurants">Restaurants</option>
                      <option value="hotels">Hotels</option>
                      <option value="attractions">Attractions</option>
                    </select>   
                </form>    
              </div>
              {/* card */}  
              {places?.map((place, i) => (
                <div key={i} >
                  <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]} />
                </div>
              ))}
            </>
          )}
    </div>
  )
}

export default List;