import React from "react";

import { airports } from "../../assets/data/airpots";
import { cruises } from "../../assets/data/cruises";

import "./SearchCruise.css";

const SearchCruise: React.FC = () => {
  return (
    <div className="search-cruise-container">
      <div className="search-cruise-container-left">
        <form className="search-cruise-form">
          <div className="search-cruise-form-item">
            <label htmlFor="all-destinations">All Destinations</label>
            <select name="all-destinations" id="all-destinations">
              {airports.map((airport) => (
                <option key={airport.id} value={airport.value}>
                  {airport.label}
                </option>
              ))}
            </select>
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="all-ports">All Ports</label>
            <input type="text" name="all-ports" id="all-ports" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="all-ships">All Ships</label>
            <input type="text" name="all-ships" id="all-ships" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="check-in">Check In</label>
            <input type="date" name="check-in" id="check-in" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="check-out">Check Out</label>
            <input type="date" name="check-out" id="check-out" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="cabin">Cabin</label>
            <input type="number" name="cabin" id="cabin" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="adults">Adults</label>
            <input type="number" name="adults" id="adults" />
          </div>
          <div className="search-cruise-form-item">
            <label htmlFor="children">Children</label>
            <input type="number" name="children" id="children" />
          </div>
          <button className="search-cruise-button">Search</button>
        </form>
      </div>
      <div className="search-cruise-container-right">
        <ul className="search-cruise-list">
          {cruises.map((cruise) => (
            <li key={cruise.id}>
              <img src={cruise.image} alt="cruise" />
              <h1>{cruise.title}</h1>
              <p>${cruise.price} per / Cabin</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCruise;
