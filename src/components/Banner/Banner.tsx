import React from "react";
import { FaPlay } from "react-icons/fa";

import "./Banner.css";
import { bannerTours } from "../../assets/data/banner-tours";

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-container-left">
        <FaPlay className="banner-play-button" />
        <small className="banner-subtitle">Are You Ready To Travel?</small>
        <h1 className="banner-title">
          TravelGo Is A World Leading Online Tour Booking Platform
        </h1>
      </div>
      <div className="banner-container-right">
        <ul className="banner-tour-list">
          {bannerTours.map((tour) => {
            const Icon = tour.icon;
            return (
              <li key={tour.id} className="banner-tour-list-item">
                <Icon />
                <h1>{tour.type}</h1>
                <small>Tours</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
