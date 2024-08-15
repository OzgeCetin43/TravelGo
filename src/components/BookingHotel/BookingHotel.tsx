import React from "react";
import { FaStar, FaLocationArrow } from "react-icons/fa";

import hero from "../../assets/images/booking-hotel-hero.jpg";

import "./BookingHotel.css";
import { facilities } from "../../assets/data/facilities";

const BookingHotel: React.FC = () => {
  return (
    <div className="booking-hotel-container">
      <div className="booking-hotel-top">
        <h1>The Ritz London</h1>
        <div className="booking-hotel-detail">
          <p className="booking-hotel-location">London</p>
          <div className="booking-hotel-star">
            <FaStar />
            <small>4.8</small>
          </div>
          <div className="booking-hotel-review">
            <small>8345 Reviews</small>
          </div>
        </div>
        <div className="booking-hotel-address">
          <FaLocationArrow />
          <small>150 Piccadilly, London W1J 9BR, United Kingdom</small>
        </div>
        <img src={hero} alt="hotel" />
      </div>
      <div className="booking-hotel-detail-container">
        <div className="booking-hotel-detail-container-left">
          <h3>About This Hotel</h3>
          <p>
            The Ritz London is an iconic luxury hotel located in the heart of
            Piccadilly, one of London's most prestigious neighborhoods.
          </p>
          <p>
            Established in 1906, The Ritz exudes timeless elegance and refined
            opulence, making it a favorite destination for discerning travelers
            from around the world. The hotel's stunning Edwardian architecture
            and lavish interiors, adorned with chandeliers, marble columns, and
            antique furnishings, transport guests to a bygone era of
            sophistication and grandeur.
          </p>
          <p>
            With 136 luxurious guest rooms and suites, each meticulously
            decorated to evoke classic glamour and modern comfort, The Ritz
            London promises an unforgettable stay. Guests are treated to
            impeccable service from the hotel's dedicated staff, ensuring every
            need is met with grace and attention to detail. The hotel's
            restaurants, including the renowned Michelin-starred Ritz
            Restaurant, offer exquisite dining experiences, serving a mix of
            British and French culinary delights.
          </p>
          <h3>Facilities</h3>
          <ul className="booking-hotel-facilities-list">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <li key={facility.id}>
                  <Icon />
                  <div className="facility-container">
                    <h4>{facility.title}</h4>
                    <p>{facility.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="booking-hotel-detail-container-right">
          <form className="booking-hotel-form">
            <div className="booking-hotel-form-top">
              <small>
                Start From <b>$250</b> / Per Person
              </small>
            </div>
            <div className="booking-hotel-form-item">
              <label htmlFor="check-in">Check In</label>
              <input type="date" name="check-in" id="check-in" />
            </div>
            <div className="booking-hotel-form-item">
              <label htmlFor="check-out">Check Out</label>
              <input type="date" name="check-out" id="check-out" />
            </div>
            <h5>Guests</h5>
            <div className="booking-hotel-form-item">
              <label htmlFor="room">Room</label>
              <input type="number" name="room" id="room" />
            </div>
            <div className="booking-hotel-form-item">
              <label htmlFor="adults">Adults (18+ Years)</label>
              <input type="number" name="adults" id="adults" />
            </div>
            <div className="booking-hotel-form-item">
              <label htmlFor="kids">Kids (12+ Years)</label>
              <input type="number" name="kids" id="kids" />
            </div>
            <button className="booking-hotel-button">Check Availability</button>
          </form>
          <div className="booking-hotel-help-container">
            <small>Get Help</small>
            <h2>Need Help To Book</h2>
            <p>
              If you're eager to experience the epitome of luxury at The Ritz
              London, our dedicated team of travel experts is here to assist you
              in making your reservation. Whether you're planning a romantic
              getaway, a family vacation, or a business trip, we can tailor your
              stay to meet your specific preferences and needs.
            </p>
            <b>Call Us: +1 (987) 654 3210</b>
          </div>
          <div className="property-highlights-container">
            <h2>Property Highlights</h2>
            <ul className="property-highlights-list">
              <li>
                <small>Established</small>
                <p>1970</p>
              </li>
              <li>
                <small>Renovation</small>
                <p>220</p>
              </li>
              <li>
                <small>Total Floor</small>
                <p>50</p>
              </li>
              <li>
                <small>Total Rooms</small>
                <p>240</p>
              </li>
              <li>
                <small>Total Restaurants</small>
                <p>5</p>
              </li>
              <li>
                <small>Total Bars</small>
                <p>3</p>
              </li>
              <li>
                <small>Total Stuff</small>
                <p>5200</p>
              </li>
              <li>
                <small>Total Branch</small>
                <p>3</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHotel;
