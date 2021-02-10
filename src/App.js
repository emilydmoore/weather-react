
import './App.css';
import Weather from './Weather';

                              

export default function App() {
  return (
      <div class="weather-app-wrapper">
       

          <Weather />

          <p class="card-text refresh">
            Last updated 3 mins ago
            <button
              type="button"
              class="btn btn-primary refresh"
              id="refresh-page-button"
            >
              Refresh
            </button>
          </p>
         
  
        <small class="source-code">
          <a
            href="https://github.com/emilydmoore/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source code{" "}
          </a>
          by Emily Moore
        </small>
      
    </div>
  );
}

export default App;