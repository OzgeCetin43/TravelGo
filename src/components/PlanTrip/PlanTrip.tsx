import React from "react";

import hero from "../../assets/images/plan-trip-hero.png";

import "./PlanTrip.css";

const PlanTrip: React.FC = () => {
  return (
    <div className="plan-trip-container">
      <div className="plan-trip-container-left">
        <img src={hero} alt="hero" />
        <div className="book-tour-container">
          <small>Book Tour Now</small>
          <p>666-111-888</p>
        </div>
        <div className="discount-container">
          <h1>30%</h1>
          <p>Discount</p>
        </div>
      </div>
      <div className="plan-trip-container-right">
        <small className="plan-trip-subtitle">Get To Know Us</small>
        <h1 className="plan-trip-title">Plan Your Trip With TravelGo</h1>
        <p className="plan-trip-description">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don't look even slightly.
        </p>
        <ul className="plan-trip-list">
          <li className="plan-trip-list-item">
            Invest in your simply neighborhood
          </li>
          <li className="plan-trip-list-item">
            Support people in free text extreme need
          </li>
          <li className="plan-trip-list-item">
            Largest global industrial business community
          </li>
        </ul>
        <button className="plan-trip-booking-button">Book With Us Now</button>
      </div>
    </div>
  );
};

export default PlanTrip;
