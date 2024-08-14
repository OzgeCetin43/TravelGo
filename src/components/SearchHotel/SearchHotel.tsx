import React from "react";
import { FaStar } from "react-icons/fa";

import { airports } from "../../assets/data/airpots";
import { hotels } from "../../assets/data/hotels";

import "./SearchHotel.css";

const SearchHotel: React.FC = () => {
  return (
    <div className="search-hotel-container">
      <div className="search-hotel-container-top">
        <p className="search-hotel-text">Search For Your Desired Hotel</p>
        <form className="search-hotel-form">
          <div className="search-hotel-form-item">
            <label htmlFor="destination">Destination</label>
            <select name="destination" id="destination">
              {airports.map((airport) => (
                <option key={airport.id} value={airport.value}>
                  {airport.label}
                </option>
              ))}
            </select>
          </div>
          <div className="search-hotel-form-item">
            <label htmlFor="start">Start</label>
            <input type="date" name="start" id="start" />
          </div>
          <div className="search-hotel-form-item">
            <label htmlFor="end">End</label>
            <input type="date" name="end" id="end" />
          </div>
          <div className="search-hotel-form-item">
            <label htmlFor="guest">Guest</label>
            <input type="number" name="guest" id="guest" />
          </div>
          <button className="search-hotel-button">Search</button>
        </form>
      </div>
      <div className="search-hotel-container-body">
        <p className="search-hotel-result">
          Showing results of <b>1 - 9</b> of <b>200</b> items
        </p>
        <ul className="search-hotel-list">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="search-hotel-list-item">
              {hotel.tag && <p className={hotel.tag}>{hotel.tag}</p>}
              <img src={hotel.image} alt={hotel.name} />
              <small>{hotel.location}</small>
              <h1>{hotel.name}</h1>
              <hr />
              <div className="search-hotel-info">
                <div>
                  <FaStar />
                  <p>{hotel.star}</p>
                  <p>{hotel.review} Reviews</p>
                </div>
                <div>
                  <p>Start From</p>
                  <h3>${hotel.price}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchHotel;
