import React from "react";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { FaPeopleGroup, FaLocationPin } from "react-icons/fa6";

import { famousPlaces } from "../../assets/data/famous-places";

import "./FamousPlaces.css";

const FamousPlaces: React.FC = () => {
  return (
    <div className="famous-places-container">
      <small className="famous-places-subtitle">Famous Places</small>
      <h1 className="famous-places-title">Our Popular Places</h1>
      <ul className="famous-places-list">
        {famousPlaces.map((place) => (
          <li key={place.id} className="famous-places-list-item">
            <img src={place.image} alt={place.title} />
            <div className="famous-place-star-container">
              <small>🥇 {place.star}</small>
              <small>({place.rate} Comments)</small>
              <small>{place.emoji}</small>
            </div>
            <h1>{place.title}</h1>
            <p className="famous-place-per-person-text">
              <span>Rs. {place.perPerson},000</span> / Per Person
            </p>
            <div className="famous-place-detail-container">
              <span>
                <LiaCalendarDaySolid /> {place.days} Days
              </span>
              <span>
                <FaPeopleGroup /> {place.perPerson}+
              </span>
              <span>
                <FaLocationPin /> {place.location}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamousPlaces;
