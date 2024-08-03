import React from "react";

import icon1 from "../../assets/images/subscribe-1.png";
import icon2 from "../../assets/images/subscribe-2.png";

import "./Subscribe.css";

const Subscribe: React.FC = () => {
  return (
    <div className="subscribe-container">
      <img src={icon1} alt="icon" />
      <div className="subscribe-detail-container">
        <h1 className="subscribe-title">
          Subscribe To Get The Latest News About Us
        </h1>
        <p className="subscribe-description">Subscribe to our Newsletter</p>
        <div className="subscribe-input-container">
          <input type="text" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <img src={icon2} alt="icon" />
    </div>
  );
};

export default Subscribe;
