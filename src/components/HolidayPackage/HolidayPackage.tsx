import React from "react";

import hero from "../../assets/images/holiday-package-hero.jpg";

import { holidayPackages } from "../../assets/data/holiday-packages";

import "./HolidayPackage.css";

const HolidayPackage: React.FC = () => {
  return (
    <div className="holiday-package-container">
      <div className="holiday-package-container-left">
        <img src={hero} alt="hero" className="holiday-package-hero" />
      </div>
      <div className="holiday-package-container-right">
        <h1 className="holiday-package-title">
          Let Us Plan You a Perfect Holiday
        </h1>
        <p className="holiday-package-description">
          Personalised, well-crafted tour packages for best experiences
        </p>
        <ul className="holiday-package-list">
          {holidayPackages.map((item) => (
            <li key={item.id} className="holiday-package-list-item">
              <h3>{item.title}</h3>
              <p>{item.package}+ Packages</p>
              <img src={item.image} alt="package" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HolidayPackage;
