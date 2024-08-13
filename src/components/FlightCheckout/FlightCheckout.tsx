import React from "react";

import "./FlightCheckout.css";

const FlightCheckout: React.FC = () => {
  return (
    <>
      <h1 className="flight-checkout-title">Prague To New-York (Round-trip)</h1>
      <small className="flight-checkout-description">
        Vaclav Havel (PRG) / John F. Kennedy Intl. (JFK)
      </small>
      <div className="flight-checkout-container">
        <div className="flight-checkout-container-left">
          <h3>Traveller Information</h3>
          <form className="flight-checkout-form">
            <div className="flight-checkout-form-item">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="flight-checkout-form-item">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
            <div className="flight-checkout-form-item">
              <label htmlFor="email">Your Email</label>
              <input type="text" id="email" name="email" />
            </div>
          </form>
          <h3>Credit Card Information</h3>
          <form className="flight-checkout-credit-card-form">
            <div className="flight-checkout-credit-card-form-item">
              <label htmlFor="name-on-card">Name On Card</label>
              <input type="text" id="name-on-card" name="name-on-card" />
            </div>
            <div className="flight-checkout-credit-card-form-item">
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" name="card-number" />
            </div>
            <div className="flight-checkout-credit-card-form-item">
              <label htmlFor="expiration-date">Expiration Date</label>
              <select id="expiration-date" name="expiration-date">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((x) => (
                  <option>{x}</option>
                ))}
              </select>
              <select id="expiration-date-year" name="expiration-date-year">
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </form>
          <h3>Billing Address</h3>
          <form action="" className="flight-checkout-billing-address-form">
            <div className="flight-checkout-billing-address-form-item">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="flight-checkout-billing-address-form-item">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="flight-checkout-billing-address-form-item">
              <label htmlFor="address">Address</label>
              <textarea name="address" id="address" rows={10} />
            </div>
          </form>
        </div>
        <div className="flight-checout-container-right">
          <h3>Flights Summary / 1 Stop (AMS)</h3>
          <div className="flight-checkout-summary-container">
            <p>Flying From: </p>
            <div>
              <h4>Prague</h4>
              <small>Vaclav Havel (PRG)</small>
            </div>
          </div>
          <div className="flight-checkout-summary-container">
            <p>To:</p>
            <div>
              <h4>New York</h4>
              <small>John F.Kennedy lntl. (JFK)</small>
            </div>
          </div>
          <div className="flight-checkout-summary-container">
            <p>Departing:</p>
            <div>
              <h4>20 Apr 2017</h4>
              <ul>
                <li>2:25 PM (PRG)</li>
                <li>7:25 PM (JFK)</li>
              </ul>
            </div>
          </div>
          <div className="flight-checkout-summary-container">
            <p>Returning:</p>
            <div>
              <h4>20 May 2017</h4>
              <ul>
                <li>4:20 PM (JFK)</li>
                <li>8:50 PM (PRG)</li>
              </ul>
            </div>
          </div>
          <h3>Charges</h3>
          <div className="flight-checkout-charges-container">
            <p>Cabin:</p>
            <h4>Economy</h4>
          </div>
          <div className="flight-checkout-charges-container">
            <p>Fees:</p>
            <h4>Included</h4>
          </div>
          <div className="flight-checkout-charges-container">
            <p>Total:</p>
            <h4>$680</h4>
          </div>
          <button className="flight-checkout-booking-button">
            Booking Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightCheckout;
