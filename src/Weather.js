import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";



export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  function showWeatherData(response) {


    setWeatherData({
        city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
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

  function updateCity(event) {
    setCity(event.target.value);
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
        <ul>
          

          <li className="city">{weatherData.city}</li>
          <li className="temperature">
            Temperature: {Math.round(weatherData.temperature)}˚F
          </li>
          <li className="icon">
            <img src={weatherData.icon} alt={weatherData.description} />{" "}
          </li>
        <div className="weather-data">
          <li className="description">Description: {weatherData.description} </li>
          <li className="humidity">Humidity: {weatherData.humidity}% </li>
          <li className="wind">Wind: {Math.round(weatherData.wind)}mph </li>
          </div>
          
        </ul>
      </div>
    );
  } else {
    return form;
  }
}