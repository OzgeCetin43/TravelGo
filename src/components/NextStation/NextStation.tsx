import React from "react";
import { Link } from "react-router-dom";

import hero from "../../assets/images/next-station-hero.png";

import "./NextStation.css";

const NextStation: React.FC = () => {
  return (
    <div className="next-station-container">
      <div className="next-station-container-left">
        <img src={hero} alt="hero" />
      </div>
      <div className="next-station-container-right">
        <h1 className="next-station-title">
          Easy Way To Go To Your Next Station
        </h1>
        <p className="next-station-description">
          Navigate the world effortlessly with our user-friendly platform,
          connecting you to the finest destinations and accommodations.
        </p>
        <ul className="next-station-list">
          <li className="next-station-list-item">
            Easily find and compare transportation options, ensuring a
            hassle-free journey to your next destination.
          </li>
          <li className="next-station-list-item">
            Enjoy a straightforward and quick booking experience for flights,
            cars, and other transportation modes, all in one place.
          </li>
        </ul>
        <Link className="check-in-flight-button" to="/flights">
          Check In Flight
        </Link>
      </div>
    </div>
  );
};

export default NextStation;
