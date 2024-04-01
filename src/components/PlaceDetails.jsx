import React from 'react' 

function PlaceDetails({ place }) { 
  return (
      <div
      className='w-full mb-20'>
      <div>
        <img 
          className='w-full '          
          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          alt={place.name}
        />
      <div>
        <div  className='flex justify-beteeen'>
            <div className='text-xl'>{place.name}</div >
            <div className=""> {place.ranking_category} </div >
          </div>
          <div  className='flex justify-beteeen pt-10'>
              {/* rating */}
              <div className="flex">
              <div className="">{place.rating}</div>
              {/* <Rating size="medium" name="read-only" value={place.rating} precision={0.5} readOnly /> */}
            </div>
            <div className="">Out of {place.num_reviews} reviews</div>
          </div>
        <div className='flex justify-beteeen pt-10'>
            <div className="">Price</div>    
            <div className="">{place.price}$</div> 
        </div>
        <div  className='flex justify-beteeen pt-10'>
            <div className="">Ranking</div>    
            <div className="">{place.ranking}</div>     
        </div>

          <div>
            {/* {place?.awards?.map((award) => (
              <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <WorkspacePremiumIcon />
                <Box>{award}</Box>
              </Box>
            ))} */}
          </div>
          {/* <div style={{ marginTop: '15px'}}>
          {place?.cuisine?.map((item) => (
              <Chip style={{ marginTop: '9px', marginRight:'10px'}} label={item.name} />
            ))}
          </div> */}
      </div>
    </div>
  </div>
)
}

export default PlaceDetails;