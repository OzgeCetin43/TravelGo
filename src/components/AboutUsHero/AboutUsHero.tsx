import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaFoursquare,
} from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

import hero1 from "../../assets/images/about-us-hero-1.png";
import hero2 from "../../assets/images/about-us-hero-2.png";
import hero3 from "../../assets/images/about-us-hero-3.png";
import icon from "../../assets/images/flight-icon.png";

import { airports } from "../../assets/data/airpots";

import "./AboutUsHero.css";

const AboutUsHero: React.FC = () => {
  return (
    <div className="about-us-hero-container">
      <div className="about-us-hero-container-left">
        <h1 className="about-us-hero-title">Let’s Create Memorable Journey</h1>
        <p className="about-us-hero-description">
          At our travel website, our speciality lies in curating unforgettable
          experiences that cater to the unique preferences of each traveler.
        </p>
        <form className="about-us-form">
          <div className="about-us-form-item">
            <label htmlFor="location">Location</label>
            <select name="location" id="location">
              {airports.map((airport) => (
                <option key={airport.id} value={airport.value}>
                  {airport.label}
                </option>
              ))}
            </select>
          </div>
          <div className="about-us-form-item">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="about-us-form-item">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" />
          </div>
          <div className="about-us-form-item">
            <label htmlFor="currency">Currency</label>
            <select name="location" id="location">
              <option value="dollar">$</option>
              <option value="tl">₺</option>
            </select>
          </div>
          <button className="about-us-search-button">Find</button>
        </form>
        <div className="about-us-hero-social-media-container">
          <FaFacebookF />
          <FaXTwitter />
          <FaYoutube />
          <FaFoursquare />
          <FaTripadvisor />
        </div>
      </div>
      <div className="about-us-hero-container-right">
        <div className="about-us-hero-image-container">
          <div className="about-us-hero-image-container-left">
            <img src={hero1} alt="hero" />
            <img src={hero2} alt="hero" />
          </div>
          <div className="about-us-hero-image-container-right">
            <img src={icon} alt="flight icon" />
            <img src={hero3} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
