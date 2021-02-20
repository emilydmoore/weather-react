
import './App.css';
import Weather from './Weather';

                              

export default function App(props) {
  return (
    <div className="app">
      <div className="weather-app">
      <div className="weather-app-wrapper">
     

          <Weather defaultCity="Little Rock"/>

       
    </div>
    </div>
      <footer className="source-code">
        
           <a
            href="https://github.com/emilydmoore/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
           Open Source Code
          </a>
           {""} created by <a href="https://www.linkedin.com/in/emily-m-62527a55/">Emily Moore</a>
       
          
        </footer>
    </div>
  );
}