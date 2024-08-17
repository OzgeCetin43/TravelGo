import React from "react";

import SearchCruise from "../../components/SearchCruise/SearchCruise";
import Experience from "../../components/Experience/Experience";
import Banner from "../../components/Banner/Banner";
import Subscribe from "../../components/Subscribe/Subscribe";
import PlanTrip from "../../components/PlanTrip/PlanTrip";

const Cruises: React.FC = () => {
  return (
    <>
      <SearchCruise />
      <Experience />
      <Banner />
      <Subscribe />
      <PlanTrip />
    </>
  );
};

export default Cruises;
