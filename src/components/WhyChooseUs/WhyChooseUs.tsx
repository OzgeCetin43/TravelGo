import React from "react";
import { FaQuestion, FaPlay } from "react-icons/fa";

import hero from "../../assets/images/why-choose-us-hero.png";

import { whyChooseUs } from "../../assets/data/why-choose-us";

import "./WhyChooseUs.css";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-container-left">
        <img src={hero} alt="hero" />
        <FaPlay className="why-choose-us-play-button" />
        <div className="why-choose-us-info-container">
          <FaQuestion />
          <div className="why-choose-us-text-container">
            <h2>Professional</h2>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
      <div className="why-choose-us-container-right">
        <small className="why-choose-us-subtitle">Why Choose Us?</small>
        <h1 className="why-choose-us-title">Plan Your Trip With Us</h1>
        <ul className="why-choose-us-list">
          {whyChooseUs.map((choose) => (
            <li key={choose.id} className="why-choose-us-list-item">
              <img src={choose.icon} alt={choose.title} />
              <h2 className="why-choose-us-list-item-title">{choose.title}</h2>
              <p className="why-choose-us-list-item-description">
                {choose.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
