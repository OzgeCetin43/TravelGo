import React from "react";

import { services } from "../../assets/data/services";

import "./Services.css";

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-main-title">Services</h1>
      <ul className="services-list">
        {services.map((service) => (
          <li key={service.id} className="services-list-item">
            <img
              src={service.image}
              alt={service.title}
              className="services-image"
            />
            <h3 className="services-title">{service.title}</h3>
            <p className="services-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
