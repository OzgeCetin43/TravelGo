import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaFoursquare,
} from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

import "./BookingFlight.css";

const BookingFlight: React.FC = () => {
  return (
    <>
      <h1 className="booking-flight-title">Booking flight</h1>
      <div className="booking-flight-container">
        <div className="booking-flight-container-left">
          <form className="booking-flight-left-form">
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
            <div>
              <small className="booking-flight-total">
                Total Booking: <span>$729</span>
              </small>
              <button className="booking-flight-button">Booking Now</button>
            </div>
          </form>
        </div>
        <div className="booking-flight-container-right">
          <h1>Prague To New York (Round-trip)</h1>
          <small>Vaclav Havel (PRG) / John F. Kennedy Intl. (JFK)</small>
          <hr />
          <h1>APR 20, 2017</h1>
          <ul className="booking-flight-summary-list">
            <li>From: Vaclav Havel (PRG)</li>
            <li>To: John F.Kennedy lntl. (JFK)</li>
          </ul>
          <small>2:25 PM (PRG) - 4:00 PM (JFK)</small>
          <hr />
          <h1>Details</h1>
          <small>2:25 PM - 4:00 PM / 1h 35m</small>
          <ul className="booking-flight-detail-list">
            <li>From Vaclav Havel (PRG)</li>
            <li>To Schiphol (AMS)</li>
            <li>KLM 1356</li>
            <li>BOEING 737-800 (WINGLETS) PASSENGER | Snack</li>
            <li>Economy/Coach (L)</li>
            <li>Preview availability</li>
            <li>Total distance: 439 mi</li>
            <li>1h 20m stop / in Amsterdam (AMS)</li>
          </ul>
          <small>5:20 PM - 7:25 PM / 2h 5m</small>
          <ul className="booking-flight-detail-list">
            <li>From: Schiphol (AMS)</li>
            <li>To: John F. Kennedy Intl. (JFK)</li>
            <li>KLM 643</li>
            <li>BOEING 787-9 | Meal</li>
            <li>Economy/Coach (R)</li>
            <li>Preview availability</li>
            <li>Total distance: 3,632 mi</li>
          </ul>
          <small>
            BAG FEES: Baggage fees when purchased at the airport (Prices may be
            cheaper if purchased online with KLM)
          </small>
          <ul className="booking-flight-detail-list">
            <li>Carry on: No fee</li>
            <li>1st checked bag: No fee up to 23 kg</li>
            <li>2nd checked bag: $91.00 up to 23 kg</li>
            <li>How to pay: KLM</li>
          </ul>
          <hr />
          <h1>May 20, 2017</h1>
          <ul className="booking-flight-summary-list">
            <li>From: John F.Kennedy lntl. (JFK)</li>
            <li>To: Vaclav Havel (PRG)</li>
          </ul>
          <small>4:20 PM (JFK) - 8:50 PM (PRG)</small>
          <h1>Details</h1>
          <small>4:20 PM - 5:45 PM / 1h 25m</small>
          <ul className="booking-flight-detail-list">
            <li>From: John F. Kennedy Intl. (JFK)</li>
            <li>To: Roissy-Charles de Gaulle (CDG)</li>
            <li>Air France 23</li>
            <li>BOEING 777-300ER | hreakfast | Meal</li>
            <li>Economy/Coach (R)</li>
            <li>Preview availability</li>
            <li>Total distance: 3,629 mi</li>
            <li>1h 25m stop / in Paris (CDG)</li>
          </ul>
          <small>7:10 PM - 8:50 PM / 1h 40m</small>
          <ul className="booking-flight-detail-list">
            <li>From: Roissy-Charles de Gaulle (CDG)</li>
            <li>To: Vaclav Havel (PRG)</li>
            <li>Air France 1382</li>
            <li>Airbus A321 | Snack</li>
            <li>Economy/Coach (L)</li>
            <li>Preview availability</li>
            <li>Total distance: 529 mi</li>
          </ul>
          <small>
            BAG FEES: Baggage fees when purchased at the airport (Prices may be
            cheaper if purchased online with KLM)
          </small>
          <ul className="booking-flight-detail-list">
            <li>Carry on: No fee</li>
            <li>1st checked bag: No fee up to 23 kg</li>
            <li>2nd checked bag: $100.00 up to 23 kg</li>
            <li>How to pay: Air France</li>
          </ul>
          <div className="booking-flight-footer">
            <div className="booking-flight-tags">
              <small>Tags:</small>
              <ul className="booking-flight-tag-list">
                <li>Travel</li>
                <li>Flights</li>
                <li>Early Booking</li>
              </ul>
              <small>Share Post:</small>
              <ul className="booking-flight-social-media-list">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaXTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaFoursquare />
                </li>
                <li>
                  <FaTripadvisor />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingFlight;
