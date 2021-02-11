
import './App.css';
import Weather from './Weather';

                              

export default function App() {
  return (
    <div className="app">
      <div className="weather-app">
      <div className="weather-app-wrapper">
     

          <Weather defaultCity="Little Rock"/>

          <p className="card-text refresh">
            Last updated 3 mins ago
            <button
              type="button"
              className="btn btn-primary refresh"
              id="refresh-page-button"
            >
              Refresh
            </button>
          </p>
        
      
    </div>
    </div>
      <footer className="source-code">
          This page was created by <a href="https://www.linkedin.com/in/emily-m-62527a55/">Emily Moore</a> {" "} with {" "}
          <a
            href="https://github.com/emilydmoore/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source on Github
          </a>
          
        </footer>
    </div>
  );
}