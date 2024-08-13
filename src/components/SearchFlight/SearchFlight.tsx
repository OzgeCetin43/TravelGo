import React from "react";

import "./SearchFlight.css";
import { flights } from "../../assets/data/flights";

const SearchFlight: React.FC = () => {
  return (
    <div className="search-flight-container">
      <div className="search-flight-container-left">
        <form className="search-flight-left-form">
          <div className="left-form-item">
            <label htmlFor="flying-from">Flying From</label>
            <input type="text" id="flying-from" name="flying-from" />
          </div>
          <div className="left-form-item">
            <label htmlFor="to">To</label>
            <input type="text" id="to" name="to" />
          </div>
          <div className="left-form-item">
            <label htmlFor="departing">Departing</label>
            <input type="date" id="departing" name="departing" />
          </div>
          <div className="left-form-item">
            <label htmlFor="returning">Returning</label>
            <input type="date" id="returning" name="returning" />
          </div>
          <div className="left-form-item">
            <label htmlFor="adults">Adults</label>
            <input type="number" id="adults" name="adults" />
          </div>
          <div className="left-form-item">
            <label htmlFor="children">Children</label>
            <input type="number" id="children" name="children" />
          </div>
          <div className="left-form-item">
            <label htmlFor="cabin">Cabin</label>
            <select id="children" name="children">
              <option value="economy">Economy</option>
              <option value="premium-economy">Premium Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </div>
        </form>
      </div>
      <div className="search-flight-container-right">
        <form className="search-flight-right-form">
          <div className="right-form-item">
            <label htmlFor="">Sort by</label>
          </div>
          <div className="right-form-item">
            <input type="text" id="sort-by" name="sort-by" />
          </div>
          <div className="right-form-item">
            <select id="price" name="price">
              <option value="low">Price (low)</option>
              <option value="high">Price (high)</option>
            </select>
          </div>
          <div className="right-form-item">
            <select id="seller" name="seller">
              <option value="top-seller">Top Seller</option>
              <option value="down">Down</option>
            </select>
          </div>
        </form>
        <div className="flights-container">
          {flights.map((flight) => (
            <div className="flight-info">
              <img src={flight.image} alt="flight" />
              <h1>{flight.path}</h1>
              <p>${flight.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
