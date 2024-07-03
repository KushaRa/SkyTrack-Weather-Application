import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import sun from '../Assets/sun.png';
import './WeatherPage.css';

const Weather = () => {
  return (
    <div className="container">
      <div className="weather">

          <div className="search">
            <input type="text" placeholder='City Name..'/>       
            <button className="searchButton"><SearchIcon /></button>
          </div>   
          <img src={sun} alt='sun' style={{ width: '100px', height: '100px', paddingTop:'30px'}} />
              
          

          
            
    </div>
        
    </div>
  );
};

export default Weather;

{/*
       
 
<div className='las-section'>

</div>*/}