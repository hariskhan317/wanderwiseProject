
import axios from "axios";

export const getPlaces = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};


export const getPlaceDetails = async() => {
    const options = {
        method: 'GET',
        url: 'https://map-places.p.rapidapi.com/details/json',
        params: {
          place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
        },
        headers: {
          'X-RapidAPI-Key': 'be279aaa0emshd0c853a0039902cp1f94fajsne5f437822d1f',
          'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}