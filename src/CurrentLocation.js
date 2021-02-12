import React from "react"; 
import axios from "axios";
import Geolocation from 'react-native-geolocation-service';

export default function CurrentLocation(){
    
    Geolocation.ApiKey("30d908cd66a42b7d4c24ca6910b237cd");
Geolocation.ApiUrl(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${ApiKey}`);



return (

<div>
    <form>
        <button type="button" className="btn btn-success">
            current location
        </button>
        
    </form>
</div>
  
);
}