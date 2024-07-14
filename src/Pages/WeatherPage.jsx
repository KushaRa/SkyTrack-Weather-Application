import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import sun from '../Assets/sun.png';
import humidity from '../Assets/humidity.png';
import windy from '../Assets/windy.png';
import './WeatherPage.css';

const Weather = () => {
  return (
    <div className="container">
      <div className="weather">

          <div className="search">
            <input type="text" placeholder='City Name..'/>       
            <button className="searchButton"><SearchIcon /></button>
          </div> 

          <div className="winfo">  
          <img src={sun} alt='sun' style={{ width: '100px', height: '100px', paddingTop:'30px'}} />
          <h1>28°C</h1>
          <h2>Colombo</h2>
          </div> 
          
          <div className="details">
              <div className="col">
              <img src={humidity} alt='humidity' style={{ width: '100px', height: '100px', paddingTop:'30px'}}/>
              <p><b>Humidity <br></br><span>20%</span> </b></p>
              </div>
              <div className="col">
              <img src={windy} alt='windy' style={{ width: '100px', height: '100px', paddingTop:'30px'}}/>
              <p><b>Windy <br></br><span>2Km/h</span></b> </p>
              </div>
          </div>

          
            
    </div>
        
    </div>
  );
};

export default Weather;

{/*
       
 
<div className='las-section'>

</div>*/}