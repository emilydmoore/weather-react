import React, { useState } from "react";

import "./Weather.css";

import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  function showWeatherData(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
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
      <div class="weather-data">
        {form}
        <ul>
          <li class="temperature">
            Temperature: {Math.round(weatherData.temperature)}˚F
          </li>
          <li class="description">Description: {weatherData.description} </li>
          <li class="humidity">Humidity: {weatherData.humidity}% </li>
          <li class="wind">Wind: {Math.round(weatherData.wind)}mph </li>
          <li class="icon">
            <img src={weatherData.icon} alt={weatherData.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}