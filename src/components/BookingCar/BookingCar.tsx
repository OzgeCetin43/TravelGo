import React from "react";

import hero from "../../assets/images/booking-car-hero.jpg";

import "./BookingCar.css";

const BookingCar: React.FC = () => {
  return (
    <div className="booking-car-container">
      <div className="booking-car-container-left">
        <div className="booking-car-form">
          <p>
            Mercedes Benz Ml <small>or similar</small>
          </p>
          <div className="booking-car-form-item">
            <label htmlFor="pick-up">Pick Up</label>
            <input type="text" name="pick-up" id="pick-up" />
          </div>
          <div className="booking-car-form-item">
            <label htmlFor="return">Return</label>
            <input type="text" name="return" id="return" />
          </div>
          <div className="booking-car-form-item">
            <label htmlFor="check-in">Check In</label>
            <input type="date" name="check-in" id="check-in" />
          </div>
          <div className="booking-car-form-item">
            <label htmlFor="check-out">Check Out</label>
            <input type="date" name="check-out" id="check-out" />
          </div>
          <div className="booking-car-form-detail">
            <small>Price</small>
            <p>$72.9 / day</p>
          </div>
          <div className="booking-car-form-detail">
            <small>Total Booking</small>
            <p>$729</p>
          </div>
          <button className="booking-car-form-button">Booking Now</button>
        </div>
      </div>
      <div className="booking-car-container-right">
        <h1>Mercedes Benz Ml</h1>
        <small>Na Strzi 32, Prague, 14000, Czech Republic</small>
        <img src={hero} alt="mercedes benz ml" />
        <div className="booking-car-facilities">
          <h4>Most Popular Facilities</h4>
          <ul className="booking-car-facility-list">
            <li>Mileage unlimited</li>
            <li>5 doors</li>
            <li>Automatic transmission</li>
            <li>5 passangers</li>
            <li>Air conditioning</li>
          </ul>
        </div>
        <p>Minimum age 25 years</p>
        <div className="booking-car-price-includes-container">
          <h4>Price Includes:</h4>
          <ul className="booking-car-price-includes-list">
            <li>All mandatory fees (LAF)</li>
            <li>VAT (See Full T&cs)</li>
          </ul>
        </div>
        <div className="booking-car-price-excludes-container">
          <h4>Price Excludes:</h4>
          <ul className="booking-car-price-excludes-list">
            <li>Damage and collision protection USD 371.68 per rental</li>
            <li>
              Personal accident protection (driver & passengers) USD 49.78 per
              rental Fuel.
            </li>
            <li>
              Return the vehicle with the same level of fuel or use our
              refuelling service (price communicated at pick-up).
            </li>
            <li>
              A deposit on your credit card will be requested at your arrival in
              station.
            </li>
          </ul>
        </div>
        <div className="booking-car-comment-container">
          <form className="booking-car-comment-form">
            <div className="booking-car-comment-form-item">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail Address" />
              <input type="text" placeholder="Website" />
            </div>
            <div className="booking-car-comment-form-item">
              <textarea rows={15} placeholder="Message" />
            </div>
            <button className="booking-car-send-comment-button">
              Send Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingCar;
