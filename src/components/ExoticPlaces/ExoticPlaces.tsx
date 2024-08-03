import React from "react";

import { exoticPlaces } from "../../assets/data/exotic-places";

import "./ExoticPlaces.css";

const ExoticPlaces: React.FC = () => {
  return (
    <div className="exotic-places-container">
      <small className="exotic-places-subtitle">Destination Lists</small>
      <h1 className="exotic-places-title">Go Exotic Places</h1>
      <div className="exotic-places-gallery">
        {exoticPlaces.map((place) => (
          <div className="exotic-place-item">
            <img key={place.id} src={place.image} alt={place.country} />
            <div className="exotic-place-detail">
              <small>{place?.tag}</small>
              <h1>{place.country}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExoticPlaces;
