import React, { useState } from "react";


export default function WeatherTemperature(props) {
    let [unit, setUnit]= useState("fahrenheit");
    
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {

        return (
            <div className="WeatherTemperature">
                <span className="Temperature"> {Math.round(props.fahrenheit)}</span>
                <span className="units">
                    {" "}
                    ˚F | {" "}
                    <a href="/" onClick={showCelsius}>
                        ˚C
                    </a>
                </span>
            </div>

        );
    } else {
        let celsius = ((props.fahrenheit - 32) * 5 / 9);
        return (
            <div className="WeatherTemperature">
                <p className="Temperature">
                    {Math.round(celsius)}
                </p>
                <span className="units">
                    <a href="/" onClick={showFahrenheit}>
                        ˚F{" "}
                    </a>
                    | ˚C
                </span>
            </div>
        );
    }
    }
