import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import humidity from '../Assets/humidity.png';
import windy from '../Assets/windy.png';
import drizzle from '../Assets/drizzle.png';
import rain from '../Assets/rain.png';
import mist from '../Assets/mist.png';
import clear from '../Assets/clear.png';
import './WeatherPage.css';
import axios from 'axios';
import clouds from '../Assets/clouds.png'

const Weather = () => {
  const [data, setData] = useState({
    celcius: 25,
    name: 'Colombo',
    humidity: 84,
    speed: 2,
    image: clear // Default image
  });

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=687b65438a15dac43046fa1060345ce2&units=metric';
    axios.get(apiUrl)
      .then(res => {
        let imagePath = windy; // Default image

        switch (res.data.weather[0].main) {
          case "Clouds":
            imagePath = clouds;
            break;
          case "Drizzle":
            imagePath = drizzle;
            break;
          case "Rain":
            imagePath = rain;
            break;
          case "Mist":
            imagePath = mist;
            break;
          case "Clear":
            imagePath = clear;
            break;
          default:
            imagePath = clear; // Default image
        }

        setData({
          celcius: res.data.main.temp,
          name: res.data.name,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          image: imagePath
        });
      })
      .catch(err => console.log(err));
  }, []);

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=687b65438a15dac43046fa1060345ce2&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = windy; // Default image

          switch (res.data.weather[0].main) {
            case "Clouds":
              imagePath =clouds;
              break;
            case "Drizzle":
              imagePath = drizzle;
              break;
            case "Rain":
              imagePath = rain;
              break;
            case "Mist":
              imagePath = mist;
              break;
            case "Clear":
              imagePath = clear;
              break;
            default:
              imagePath = clear; // Default image
          }

          setData({
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath
          });
          setError('');
        })
        .catch(err => {
          console.error(err);
          setError('City not found');
        });
    }
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input 
            type="text" 
            placeholder='City Name..' 
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button className="searchButton" onClick={handleClick}>
            <SearchIcon />
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="winfo">
          <img src={data.image} alt='weather' style={{ width: '100px', height: '100px', paddingTop: '30px' }} />
          <h1>{data.celcius}°C</h1>
          <h2>{data.name}</h2>
        </div>

        <div className="details">
          <div className="col">
            <img src={humidity} alt='humidity' style={{ width: '75px', height: '75px', paddingTop: '30px' }} />
            <div className='humidity'>
              <p><b>Humidity: {data.humidity}% </b></p>
            </div>
          </div>

          <div className="col">
            <img src={windy} alt='wind' style={{ width: '75px', height: '75px', paddingTop: '30px' }} />
            <div className='wind'>
              <p><b>Wind: {data.speed}Km/h </b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
