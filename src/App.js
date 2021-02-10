
import './App.css';
import Weather from './Weather';
import SearchForm from "./SearchForm";
                              

export default function App() {
  return (
    <div class="container">
      <span class="weather-app-wrapper">
        <span class="weather-app">
          <SearchForm />
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
         
        </span>
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
      </span>
    </div>
  );
}
