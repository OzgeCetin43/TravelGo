import React from "react";

import { cars } from "../../assets/data/cars";

import "./SearchCar.css";

const SearchCar: React.FC = () => {
  return (
    <div className="search-car-container">
      <div className="search-car-container-left">
        <div className="search-car-container-form">
          <div className="search-car-container-form-item">
            <label htmlFor="pick-up">Pick Up</label>
            <input type="text" id="pick-up" name="pick-up" />
          </div>
          <div className="search-car-container-form-item">
            <label htmlFor="return">Return</label>
            <input type="text" id="return" name="return" />
          </div>
          <div className="search-car-container-form-item">
            <label htmlFor="check-in">Check In</label>
            <input type="date" id="check-in" name="check-in" />
          </div>
          <div className="search-car-container-form-item">
            <label htmlFor="check-out">Check Out</label>
            <input type="date" id="check-out" name="check-out" />
          </div>
          <button className="search-car-button">Search</button>
        </div>
        <div className="search-car-category-container">
          <h4>Category</h4>
          <form className="search-car-category-form">
            <div className="search-car-category-form-item">
              <input type="checkbox" id="premium" name="premium" />
              <label htmlFor="premium">Premium</label>
            </div>
            <div className="search-car-category-form-item">
              <input
                type="checkbox"
                id="automatic-cars"
                name="automatic-cars"
              />
              <label htmlFor="automatic-cars">Automatic Cars</label>
            </div>
            <div className="search-car-category-form-item">
              <input
                type="checkbox"
                id="small-and-medium-cars"
                name="small-and-medium-cars"
              />
              <label htmlFor="small-and-medium-cars">Small & Medium Cars</label>
            </div>
            <div className="search-car-category-form-item">
              <input type="checkbox" id="sedans" name="sedans" />
              <label htmlFor="sedans">Sedans</label>
            </div>
            <div className="search-car-category-form-item">
              <input
                type="checkbox"
                id="mpv-and-family-cars"
                name="mpv-and-family-cars"
              />
              <label htmlFor="mpv-and-family-cars">MPV & Family Cars</label>
            </div>
          </form>
        </div>
      </div>
      <div className="search-car-container-right">
        <ul className="search-car-list">
          {cars.map((car) => (
            <li key={car.id}>
              <img src={car.image} alt="car" />
              <h1>{car.model}</h1>
              <small>
                {car.door} door / {car.transmissionType} / {car.passenger}{" "}
                passenger
              </small>
              <p>${car.price} per / Day</p>
            </li>
          ))}
          <button className="rent-a-car-button">Rent A Car</button>
        </ul>
      </div>
    </div>
  );
};

export default SearchCar;
