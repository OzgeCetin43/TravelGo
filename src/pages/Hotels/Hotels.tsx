import React from "react";

import SearchHotel from "../../components/SearchHotel/SearchHotel";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import Sponsor from "../../components/Sponsor/Sponsor";
import BookingHotel from "../../components/BookingHotel/BookingHotel";
import Services from "../../components/Services/Services";
import Map from "../../components/Map/Map";
import Subscribe from "../../components/Subscribe/Subscribe";

const Hotels: React.FC = () => {
  return (
    <>
      <SearchHotel />
      <ExoticPlaces />
      <Sponsor />
      <BookingHotel />
      <Services />
      <Map />
      <Subscribe />
    </>
  );
};

export default Hotels;
