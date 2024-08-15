import React from "react";

import SearchHotel from "../../components/SearchHotel/SearchHotel";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import Sponsor from "../../components/Sponsor/Sponsor";
import BookingHotel from "../../components/BookingHotel/BookingHotel";

const Hotels: React.FC = () => {
  return (
    <>
      <SearchHotel />
      <ExoticPlaces />
      <Sponsor />
      <BookingHotel />
    </>
  );
};

export default Hotels;
