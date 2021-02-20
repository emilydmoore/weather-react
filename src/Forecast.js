import React, { useState } from "react";
import axios from "axios";


import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    
    setForecast(response.data);
    setLoaded(true);
  }

  function formatHours(date) {
  
  let hours = date.getHours();
  let amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}${amOrPm}`;
}

  if (loaded && forecast.city.name === props.city) {
    return (
   <div className="WeatherForecast row">
        {forecast.list.slice(0, 5).map(function(weather) {
          return (
            <div className="col">
              <div className="hours">
                {formatHours(new Date(weather.dt * 1000))}
              </div>
              <div className="Icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="temperatures">
                {Math.round(weather.main.temp)}°F
              </div>
            </div>
          );
        })}
      </div>
    );
      } else {
        let units="imperial";
        let apiKey="30d908cd66a42b7d4c24ca6910b237cd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
        return null;
      }
     

  }

