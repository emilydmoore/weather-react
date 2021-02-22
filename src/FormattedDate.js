import React from "react";

export default function FormattedDate(props) {

    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
    

    let minute = props.date.getMinutes();

    if (minute < 10) {
        minute = `0${minute}`;
    }
    return (
        <div>
            {day}, {hours}:{minute}{amOrPm}
        </div>
    );
}

