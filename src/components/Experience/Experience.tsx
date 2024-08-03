import React from "react";

import hero from "../../assets/images/experience-hero.png";

import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="experience-container-left">
        <small className="experience-subtitle">Our Experiences</small>
        <h1 className="experience-title">
          Choose Dream Places For Explore The World
        </h1>
        <p className="experience-description">
          Our dedicated team is committed to providing you with exceptional
          experiences, personalized itineraries, and expert guidance, ensuring
          your journey is filled with unforgettable moments.
        </p>
        <ul className="experience-list">
          <li className="experience-list-item">
            <h2>120+</h2>
            <p>Total Destinations</p>
          </li>
          <li className="experience-list-item">
            <h2>500+</h2>
            <p>Travel Packages</p>
          </li>
          <li className="experience-list-item">
            <h2>12K+</h2>
            <p>Total Travelers</p>
          </li>
          <li className="experience-list-item">
            <h2>7K+</h2>
            <p>Positive Review</p>
          </li>
        </ul>
      </div>
      <div className="experience-container-right">
        <img src={hero} alt="hero" />

        <div className="experience-emoji-chooser">
          <p>How Your Experience?</p>
          <div className="experience-emoji-container">
            <small>😀</small>
            <small>😎</small>
            <small>😍</small>
            <small>🥰</small>
            <small>🤩</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
