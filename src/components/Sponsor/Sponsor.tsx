import React from "react";

import { sponsors } from "../../assets/data/sponsors";

import "./Sponsor.css";

const Sponsor: React.FC = () => {
  return (
    <div className="sponsor-container">
      <h1 className="sponsor-title">Our Sponsors</h1>
      <ul className="sponsor-list">
        {sponsors.map((sponsor) => (
          <li key={sponsor.id} className="sponsor-list-item">
            <img src={sponsor.image} alt="sponsor" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sponsor;
