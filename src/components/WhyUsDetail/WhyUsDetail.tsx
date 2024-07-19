import React from "react";

import hero from "../../assets/images/why-us-detail-hero.jpg";

import { whyUsDetails } from "../../assets/data/why-us-details";

import "./WhyUsDetail.css";

const WhyUsDetail: React.FC = () => {
  return (
    <div className="why-us-detail-container">
      <div className="why-us-detail-container-left">
        <small className="why-us-detail-subtitle">Why Choose TravelGo</small>
        <h1 className="why-us-detail-main-title">
          We Let Your Sweet Memory Ever Unforgottable
        </h1>
        <ul className="why-us-detail-list">
          {whyUsDetails.map((detail) => (
            <li key={detail.id} className="why-us-detail-list-item">
              <img
                src={detail.image}
                alt={detail.title}
                className="why-us-detail-image"
              />
              <h2 className="why-us-detail-title">{detail.title}</h2>
              <p className="why-us-detail-description">{detail.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="why-us-detail-container-right">
        <img src={hero} alt="hero" className="why-us-detail-hero-image" />
      </div>
    </div>
  );
};

export default WhyUsDetail;
