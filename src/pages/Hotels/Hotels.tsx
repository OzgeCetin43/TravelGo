import React from "react";

import SearchHotel from "../../components/SearchHotel/SearchHotel";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import Sponsor from "../../components/Sponsor/Sponsor";

const Hotels: React.FC = () => {
  return (
    <>
      <SearchHotel />
      <ExoticPlaces />
      <Sponsor />
    </>
  );
};

export default Hotels;
