import React from "react";

import hero from "../../assets/images/why-us-hero.jpg";
import image1 from "../../assets/images/why-us-1.png";
import image2 from "../../assets/images/why-us-2.png";

import "./WhyUs.css";

const WhyUs: React.FC = () => {
  return (
    <div className="why-us-container">
      <div className="why-us-container-left">
        <img src={hero} alt="hero" className="why-us-hero-image" />
      </div>
      <div className="why-us-container-right">
        <small className="why-us-subtitle">Let's Explore The World</small>
        <h1 className="why-us-title">We Make Your Travel More Enjoyable</h1>
        <p className="why-us-description">
          Embrace a worry-free travel experience with us as we strive to make
          your journey more enjoyable. From seamless itineraries to handpicked
          accommodations, we take care of every detail, leaving you free to
          savor every moment and create unforgettable memories.
        </p>
        <ul className="why-us-list">
          <li className="why-us-list-item">
            <img src={image1} alt="why us item" />
            <p>Award winning tour & travel arranger</p>
          </li>
          <li className="why-us-list-item">
            <img src={image2} alt="why us item" />
            <p>Most popular booking solution provider</p>
          </li>
        </ul>
        <ol className="why-us-info-list">
          <li className="why-us-info-list-item">
            Personalized Itineraries: Tailored to your preferences and
            interests.
          </li>
          <li className="why-us-info-list-item">
            Hand picked premium Accommodations that guarantee comfort and
            relaxation.
          </li>
          <li className="why-us-info-list-item">
            Dedicated 24/7 support team ready to assist you at any moment.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WhyUs;
