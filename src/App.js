
import './App.css';
import Weather from './Weather';
import SearchForm from './SearchForm';
                              

export default function App() {
  return (
      <div class="weather-app-wrapper">
        <SearchForm />

          <Weather defaultCity="Little Rock"/>

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
         
  
        <footer class="source-code">
          This page was created by <a href="https://www.linkedin.com/in/emily-m-62527a55/">Emily Moore</a> {" "} with {" "}
          <a
            href="https://github.com/emilydmoore/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source Github
          </a>
          
        </footer>
      
    </div>
  );
}