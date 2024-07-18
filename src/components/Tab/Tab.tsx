import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { GiIronHulledWarship } from "react-icons/gi";

import "./Tab.css";
import { airports } from "../../assets/data/airpots";

const flightTabContent = (
  <>
    <div className="tab-form-item">
      <label htmlFor="fliying-from">Flying From</label>
      <select name="flying-from" id="flying-from">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="flying-to">Flying To</label>
      <select name="flying-to" id="flying-to">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="departing">Departing</label>
      <input type="date" name="departing" id="departing" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="returning">Returning</label>
      <input type="date" name="returning" id="returning" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="adult">Adult</label>
      <input type="number" name="adult" id="adult" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="child">Child</label>
      <input type="number" name="child" id="child" />
    </div>
    <button className="tab-form-button">Search</button>
  </>
);

const hotelTabContent = (
  <>
    <div className="tab-form-item">
      <label htmlFor="hotel-name">Hotel Name</label>
      <input type="text" name="hotel-name" id="hotel-name" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="check-in">Check-In</label>
      <input type="date" name="check-in" id="check-in" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="check-out">Check-Out</label>
      <input type="date" name="check-out" id="check-out" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="room">Room</label>
      <select name="room" id="room">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((adultNumber) => (
          <option
            key={adultNumber}
            value={adultNumber}
          >{`Room for ${adultNumber} adult`}</option>
        ))}
      </select>
    </div>
    <button className="tab-form-button">Search</button>
  </>
);

const carTabContent = (
  <>
    <div className="tab-form-item">
      <label htmlFor="country">Country</label>
      <select name="country" id="country">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="city">City</label>
      <select name="city" id="city">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="location">Location</label>
      <select name="location" id="location">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="pick-up-date">Pick Up Date</label>
      <input type="date" name="pick-up-date" id="pick-up-date" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="drop-off-date">Drop Off Date</label>
      <input type="date" name="drop-off-date" id="drop-off-date" />
    </div>
    <button className="tab-form-button">Search</button>
  </>
);

const cruisesTabContent = (
  <>
    <div className="tab-form-item">
      <label htmlFor="sail-to">Sail To</label>
      <select name="sail-to" id="sail-to">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="sail-from">Sail From</label>
      <select name="sail-from" id="sail-from">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <div className="tab-form-item">
      <label htmlFor="start-date">Start Date</label>
      <input type="date" name="start-date" id="start-date" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="end-date">End Date</label>
      <input type="date" name="end-date" id="end-date" />
    </div>
    <div className="tab-form-item">
      <label htmlFor="cruise-ship">Cruise Ship</label>
      <select name="cruise-ship" id="cruise-ship">
        {airports.map((airport) => (
          <option key={airport.id} value={airport.value}>
            {airport.label}
          </option>
        ))}
      </select>
    </div>
    <button className="tab-form-button">Search</button>
  </>
);

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("flights");

  let formContent = flightTabContent;

  if (activeTab === "hotels") {
    formContent = hotelTabContent;
  } else if (activeTab === "cars") {
    formContent = carTabContent;
  } else if (activeTab === "cruises") {
    formContent = cruisesTabContent;
  }

  return (
    <div className="tab-container">
      <ul className="tab-list">
        <li
          className={
            activeTab === "flights" ? "tab-list-item active" : "tab-list-item"
          }
          onClick={() => setActiveTab("flights")}
        >
          <MdFlight />
          Flights
        </li>
        <li
          className={
            activeTab === "hotels" ? "tab-list-item active" : "tab-list-item"
          }
          onClick={() => setActiveTab("hotels")}
        >
          <FaHotel />
          Hotels
        </li>
        <li
          className={
            activeTab === "cars" ? "tab-list-item active" : "tab-list-item"
          }
          onClick={() => setActiveTab("cars")}
        >
          <FaCar />
          Cars
        </li>
        <li
          className={
            activeTab === "cruises" ? "tab-list-item active" : "tab-list-item"
          }
          onClick={() => setActiveTab("cruises")}
        >
          <GiIronHulledWarship />
          Cruises
        </li>
      </ul>
      <form className="tab-form">{formContent}</form>
    </div>
  );
};

export default Tab;
