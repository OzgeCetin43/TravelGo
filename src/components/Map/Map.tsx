import React from "react";

import { maps } from "../../assets/data/maps";

import "./Map.css";

const Map: React.FC = () => {
  return (
    <div className="map-container">
      <h1 className="map-main-title">Best Places To Visit</h1>
      <ul className="map-list">
        {maps.map((map) => (
          <li key={map.id} className="map-list-item">
            <img src={map.image} alt={map.country} className="map-image" />
            <h3 className="map-country">{map.country}</h3>
            <small className="map-title">{map.title}</small>
            <button className="map-explore-button">Explore</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
