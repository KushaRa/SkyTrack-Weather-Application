import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import sun from '../Assets/sun.png';
import './WeatherPage.css';

const Weather = () => {
  return (
    <div className="weather-page">
      <div className="searchWeather">
        <input type="text" placeholder='City Name..'/>
        <buttonn className="search">
          <SearchIcon />
         </buttonn>
      </div>
      <div className="weatherIcon"  >
      <img src={sun} alt='sun'></img>
      </div>
             
     
      <div className='las-section'>

      </div>
      
    </div>
  );
};

export default Weather;