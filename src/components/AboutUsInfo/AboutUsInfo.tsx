import React from "react";

import { aboutUsInfos } from "../../assets/data/about-us-infos";

import "./AboutUsInfo.css";

const AboutUsInfo: React.FC = () => {
  return (
    <div className="about-us-info-container">
      <div className="about-us-info-container-left">
        <small className="about-us-info-subtitle">About Us</small>
        <h1 className="about-us-info-title">Your Trusted Travel Partner</h1>
        <p className="about-us-info-description">
          At our travel website, our speciality lies in curating unforgettable
          experiences that cater to the unique preferences of each traveler.
          From family vacations to solo adventures, romantic getaways to group
          escapades, we take pride in offering a diverse range of handpicked
          destinations and carefully crafted itineraries.
        </p>
        <p className="about-us-info-description">
          Our team of travel experts is dedicated to staying ahead of the curve,
          ensuring that we bring you the latest travel trends and hidden gems to
          explore. Whether it's seeking out off-the-beaten-path activities or
          securing exclusive deals with our trusted partners, our commitment to
          excellence ensures that every trip planned through our platform is a
          journey of a lifetime.
        </p>
        <p className="about-us-info-description">
          Our 24/7 customer service team is always at your disposal, ready to
          address any queries or assist with last-minute changes.
        </p>
      </div>
      <div className="about-us-info-container-right">
        <ul className="about-us-info-list">
          {aboutUsInfos.map((info) => (
            <li key={info.id} className="about-us-info-list-item">
              <img
                src={info.image}
                alt="about us item"
                className="about-us-info-item-image"
              />
              <h3 className="about-us-info-item-title">{info.title}</h3>
              <p className="about-us-info-item-description">
                {info.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsInfo;
