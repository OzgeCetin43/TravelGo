import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaFoursquare,
} from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

import hero from "../../assets/images/home-hero.jpg";

import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <p className="hero-phone-number">+1 (987) 654 3210</p>
      <div className="hero-social-media-container">
        <FaFacebookF />
        <FaXTwitter />
        <FaYoutube />
        <FaFoursquare />
        <FaTripadvisor />
      </div>
      <div className="hero-container-left">
        <div className="hero-info">
          <small className="hero-subtitle">Start Travelling Now</small>
          <h1 className="hero-title">
            Explore the Top Destination of Planet Earth
          </h1>
          <p className="hero-description">
            Embrace the journey; Travel with passion and purpose.
          </p>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={hero} alt="hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
