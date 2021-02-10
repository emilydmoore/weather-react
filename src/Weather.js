import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";



export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState("");


  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeatherData(response) {


    setWeatherData({
        city: response.data.name,
        country: response.data.system.country,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description, 
      date: new Date(response.data.dt * 1000)
    });

    setLoaded(true);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "30d908cd66a42b7d4c24ca6910b237cd";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherData);
  }

  

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="enter city here"
        autoFocus={true}
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (

      <div className="weather-data">
        {form}
          

          <h2 className="city">({city.toUpperCase()}, {weatherData.country}</h2>
          <h3 className="temperature">
            Temperature: {weatherData.temperature}˚F
          </h3>

          <ul>
          <li className="icon">
            <img src={weatherData.icon} alt={weatherData.description} />{" "}
          </li>
        
          <li className="description">Description: {weatherData.description} </li>
          <li className="humidity">Humidity: {weatherData.humidity}% </li>
          <li className="wind">Wind: {weatherData.wind}mph </li>
          
          
        </ul>
      </div>
    );
  } else {
    return form;
  }
}