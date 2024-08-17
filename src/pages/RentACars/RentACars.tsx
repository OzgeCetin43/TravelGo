import React from "react";

import SearchCar from "../../components/SearchCar/SearchCar";
import WhyUsDetail from "../../components/WhyUsDetail/WhyUsDetail";
import HolidayPackage from "../../components/HolidayPackage/HolidayPackage";
import Experience from "../../components/Experience/Experience";
import Subscribe from "../../components/Subscribe/Subscribe";
import BookingCar from "../../components/BookingCar/BookingCar";

const RentACars: React.FC = () => {
  return (
    <>
      <SearchCar />
      <WhyUsDetail />
      <HolidayPackage />
      <Experience />
      <Subscribe />
      <BookingCar />
    </>
  );
};

export default RentACars;
