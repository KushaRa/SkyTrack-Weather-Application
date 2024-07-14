import React,{useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import sun from '../Assets/sun.png';
import humidity from '../Assets/humidity.png';
import windy from '../Assets/windy.png';
import './WeatherPage.css';

const Weather = () => {
  const[data,setData]=useState(
    {
      celcius:25,
      name:colombo,
      humidity:84,
      speed:2
    }
  )
  useEffect(()=>
  {
    
  })
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
              <img src={humidity} alt='humidity' style={{ width: '75px', height: '75px', paddingTop:'30px'}}/>
              <div className='humidity'>
              <p><b>Humidity: </b></p>
              <p><b>20%</b></p>
              </div>
              </div>

              <div className="col">
              <img src={windy} alt='windy' style={{ width: '75px', height: '75px', paddingTop:'30px'}}/>
              <div className='wind'>
              <p><b>Wind: </b> </p>
              <p><b>2Km/h</b></p>
              </div>
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