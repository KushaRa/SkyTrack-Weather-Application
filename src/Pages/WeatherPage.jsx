import React,{useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import sun from '../Assets/sun.png';
import humidity from '../Assets/humidity.png';
import windy from '../Assets/windy.png';
import './WeatherPage.css';
import axios from 'axios';

const Weather = () => {
  const[data,setData]=useState(
    {
      celcius:25,
      name:'colombo',
      humidity:84,
      speed:2
    }
  )
  useEffect(()=>
  {
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=687b65438a15dac43046fa1060345ce2&&units=metric';
    axios.get(apiUrl)
    .then(res => {
      setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
    })
    .catch(err=> console.log(err));

  }, [])
  return (
    <div className="container">
      <div className="weather">

          <div className="search">
            <input type="text" placeholder='City Name..'/>       
            <button className="searchButton"><SearchIcon /></button>
          </div> 

          <div className="winfo">  
          <img src={sun} alt='sun' style={{ width: '100px', height: '100px', paddingTop:'30px'}} />
          <h1>{data.celcius}°C</h1>
          <h2>{data.name}</h2>
          </div> 
          
          <div className="details">
              <div className="col">
              <img src={humidity} alt='humidity' style={{ width: '75px', height: '75px', paddingTop:'30px'}}/>
              <div className='humidity'>
              <p><b>Humidity: </b></p>
              <p><b>{data.humidity}%</b></p>
              </div>
              </div>

              <div className="col">
              <img src={windy} alt='windy' style={{ width: '75px', height: '75px', paddingTop:'30px'}}/>
              <div className='wind'>
              <p><b>Wind: </b> </p>
              <p><b>{data.speed}Km/h</b></p>
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