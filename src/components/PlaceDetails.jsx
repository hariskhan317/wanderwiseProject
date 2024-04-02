import React from 'react' 
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import { BsBrowserEdge } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";


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
                <div className='text-xl font-semibold border-b font-montserrat'>{place.name}</div >
          </div>
          <div className=''>   
                <p className="font-montserrat font-medium ">{place.address}</p>     
            </div>
          <div className='flex justify-between'>
                <div className="font-montserrat text-sm text-gray-500 capitalize font-medium">{place.ranking_category} </div >  
                <div className="font-montserrat font-medium text-sm text-gray-700">{place.price}$</div> 
            </div>
            <div className='flex justify-between'>
            {/* rating */}
                <div className="flex justify-between">
                  <div className="font-montserrat font-medium text-sm mt-0.5">{place.rating}</div>
                  <Rating
                  className='text-yellow-500 mt-1 ml-1 text-sm'
                      emptySymbol={<FaRegStar />} 
                      fullSymbol={<FaStar />} 
                      initialRating={place.rating}
                      fractions={2}
                    />
                </div>
                <div className="font-montserrat">Out of {place.num_reviews} reviews</div>
            </div>
            <div className='flex justify-between'>   
                <p className="font-montserrat font-medium ">{place.ranking}</p>     
            </div>
        </div>
      </div>
      {/* tags & certificate */}
      <div> 
          <div className='mt-5'>
            {place?.awards?.map((award) => (
              <div sx={{ display: 'flex', justifyContent: 'space-between'}}>
               <PiMedalLight />
                <div className='font-montserrat'>{award}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-3 mt-5'>
          {place?.cuisine?.map((item) => (
            <span className='border-2 bg-gray-200 text-gray-800 text-sm font-medium px-3 rounded-full whitespace-nowrap font-montserrat'>{item.name}</span> 
          ))}
          </div> 
        {/*  */}
         
        <div className='flex gap-10 mt-10'>
          <div>
            <a className='flex gap-2 text-base font-medium font-montserrat' rel="noreferrer"  target="_blank" href={place.web_url}>
              <FaTripadvisor className='text-2xl' />
              <span>Trip Advisor</span>
            </a>
          </div>
          <div>
            <a className='flex gap-2 text-base font-medium font-montserrat' rel="noreferrer"  target="_blank" href={place.website}>
              <BsBrowserEdge className='mt-0.5 text-lg' />
              <span>Website</span>
            </a>
          </div>
        </div>

      </div>
  </div>
)
}

export default PlaceDetails;