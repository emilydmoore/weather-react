import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form id="city-search-form">
      <span class="row">
        <span class="col-6 search">
          <input
            type="search"
            placeholder="enter city here"
            class="form-control shadow-sm border-0"
            autocomplete="off"
            autofocus="on"
            id="city-input"
          />
        </span>
        <span class="col-3 enter">
          <input
            type="submit"
            value="search"
            class="form-control btn btn-primary shadow-sm"
          />
        </span>
        <span class="col-3 current">
          <button
            type="button"
            class="btn btn-success"
            id="current-location-button"
          >
            current location
          </button>
        </span>
      </span>
    </form>
  );
}
