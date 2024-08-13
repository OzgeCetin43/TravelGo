import React from "react";

import SearchFlight from "../../components/SearchFlight/SearchFlight";
import BookingFlight from "../../components/BookingFlight/BookingFlight";

const Flights: React.FC = () => {
  return (
    <>
      <SearchFlight />
      <BookingFlight />
    </>
  );
};

export default Flights;
