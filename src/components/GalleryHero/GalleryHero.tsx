import React from "react";

import { airports } from "../../assets/data/airpots";

import "./GalleryHero.css";

const GalleryHero: React.FC = () => {
  return (
    <div className="gallery-hero-container">
      <h1>Travel & Adventures</h1>
      <p>Where Would You Like To Go?</p>
      <form className="gallery-form">
        <div className="gallery-form-item">
          <label htmlFor="where-to">Where To</label>
          <select name="where-to" id="where-to">
            {airports.map((airport) => (
              <option key={airport.id} value={airport.value}>
                {airport.label}
              </option>
            ))}
          </select>
        </div>
        <div className="gallery-form-item">
          <label htmlFor="when">When</label>
          <input type="date" name="when" id="when" />
        </div>
        <div className="gallery-form-item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="adventure">Adventure</option>
            <option value="wildlife">Wildlife</option>
            <option value="sightseeing">Sightseeing</option>
          </select>
        </div>
        <button className="gallery-form-button">Search</button>
      </form>
    </div>
  );
};

export default GalleryHero;
