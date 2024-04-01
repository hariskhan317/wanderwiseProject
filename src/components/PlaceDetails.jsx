import React from 'react' 
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
function PlaceDetails({ place }) { 
  return (
    <div className='w-full mb-10 border rounded-md shaow-xl pt-5 pb-3 px-2 overflow-hidden'>
      {/* main */}
      <div className='grid grid-cols-5 gap-5'>
        <div className='col-span-2'>
          <img  className='w-[170px] h-[170px] rounded-full' alt={place.name}         
            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          />
        </div>
        <div className='col-span-3 space-y-3'>
            <div className=''>
                <div className='text-xl font-semibold border-b'>{place.name}</div >
          </div>
          <div className='flex justify-between'>
                <div className="text-sm text-gray-500 capitalize">{place.ranking_category} </div >  
                <div className="">{place.price}$</div> 
            </div>
            <div className='flex justify-between'>
            {/* rating */}
                <div className="flex justify-between">
                  <div className="">{place.rating}</div>
                  <Rating
                  className='text-yellow-500 mt-0.5 ml-1'
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />} 
                      initialRating={place.rating}
                      fractions={2}
                    />
                </div>
                <div className="">Out of {place.num_reviews} reviews</div>
            </div>
            <div  className='flex justify-between'>   
                <div className="">{place.ranking}</div>     
            </div>
        </div>
      </div>
      {/* tags & certificate */}
      <div> 
          <div>
            {place?.awards?.map((award) => (
              <div sx={{ display: 'flex', justifyContent: 'space-between'}}>
               <PiMedalLight />
                <div>{award}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-3 mt-5'>
          {place?.cuisine?.map((item) => (
            <span className='border-2 bg-gray-200 text-gray-800 text-sm px-3 rounded-full whitespace-nowrap'>{item.name}</span> 
          ))}
          </div> 
      

      </div>
  </div>
)
}

export default PlaceDetails;