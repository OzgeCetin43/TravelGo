import React from "react";

import SearchFlight from "../../components/SearchFlight/SearchFlight";
import BookingFlight from "../../components/BookingFlight/BookingFlight";
import Map from "../../components/Map/Map";
import Subscribe from "../../components/Subscribe/Subscribe";
import FlightCheckout from "../../components/FlightCheckout/FlightCheckout";
import Sponsor from "../../components/Sponsor/Sponsor";
import FamousPlaces from "../../components/FamousPlaces/FamousPlaces";

const Flights: React.FC = () => {
  return (
    <>
      <SearchFlight />
      <BookingFlight />
      <Map />
      <Subscribe />
      <FlightCheckout />
      <Sponsor />
      <FamousPlaces />
    </>
  );
};

export default Flights;
