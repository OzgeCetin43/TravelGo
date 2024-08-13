import React from "react";

import SearchFlight from "../../components/SearchFlight/SearchFlight";
import BookingFlight from "../../components/BookingFlight/BookingFlight";
import Map from "../../components/Map/Map";
import Subscribe from "../../components/Subscribe/Subscribe";

const Flights: React.FC = () => {
  return (
    <>
      <SearchFlight />
      <BookingFlight />
      <Map />
      <Subscribe />
    </>
  );
};

export default Flights;
