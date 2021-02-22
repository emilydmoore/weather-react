import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";



export default function Weather(props) {

  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState(false);


  function updateCity(event) {
      event.preventDefault();
    setCity(event.target.value);
  }

  function showWeatherData(response) {


    setWeatherData({
      ready: true, 
        city: response.data.name,
        country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description, 
      date: new Date(response.data.dt * 1000)
    });

    setLoaded(true);
  }

  function handleSearch() {

    let apiKey = "30d908cd66a42b7d4c24ca6910b237cd";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherData);
  }

  function handleSubmit(event){
      event.preventDefault();
      handleSearch();
  }

  let form = (
    <form id="city-search-form" onSubmit={handleSubmit}>
       <span className="row">
        <span className="col-6 search">
      <input
        type="search"
        placeholder="type a city"
        autoFocus={true}
        className="form-control shadow-sm border-0"
        onChange={updateCity}
        id="city-input"
      />
      </span>
      <span>
      <input type="submit" value="search" class="form-control btn btn-primary shadow-sm"/>
   </span>
   <span className="col-3 current">
   
    
   </span>
   </span>
    </form>
  );

  if (loaded) {
    return (

      <div className="current-weather">
        {form}
          

          <h2 className="city">{city}, {weatherData.country}</h2>
          <p className="Date">
                <FormattedDate date={weatherData.date} />
              </p>
          <h4 className="temperature">
             <div className="col-sm degree">
          <WeatherTemperature fahrenheit={weatherData.temperature} />
          </div>
          </h4>

          <ul>
          <li className="icon">
            <img src={weatherData.icon} alt={weatherData.description} />{" "}
          </li>
        
          <li className="description">Description: {weatherData.description} </li>
          <li className="humidity">Humidity: {weatherData.humidity}% </li>
          <li className="wind">Wind: {weatherData.wind}mph </li>
          
          
        </ul>
       
         <Forecast city={weatherData.city} />
      </div>
     
    );
  } else {
    handleSearch();
    return form;
  }
}