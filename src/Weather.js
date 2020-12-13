import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    temperature: 70,
    time: "2:00pm",
    description: "Partly Cloudy",
    img: "https://openweathermap.org/img/wn/02d@2x.png",
    feelsLike: 69,
    humidity: 50,
    wind: 5
  };
  return (
    <div class="Weather">
      <h1 id="city">{weatherData.city}</h1>

      <ul>
        <span>
          <li id="current-day">
            Sun 9/27 <br /> {weatherData.time}{" "}
          </li>
        </span>
        <li class="weather-description" id="weather-description">
          {weatherData.description}
        </li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-description">
            <img
              src={weatherData.img}
              id="weather-icon"
              alt=""
              class="weather-today"
            />
            <div class="float-left">
              <span class="temperature" id="temperature">
                {weatherData.temperature}
              </span>
              <span class="units">
                <a href="#" id="fahrenheit-link" class="active">
                  ˚F
                </a>{" "}
                |
                <a href="#" id="celsius-link">
                  ˚C
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul class="phw">
            <li>
              Feels like: <span id="feels-like"> </span> {weatherData.feelsLike}
              ˚F
            </li>
            <li>
              Humidity: <span id="humidity"> </span>
              {weatherData.humidity}%
            </li>
            <li>
              Wind: <span id="wind"> </span> {weatherData.wind} mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
