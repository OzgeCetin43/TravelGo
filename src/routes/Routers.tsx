import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Gallery from "../pages/Gallery/Gallery";
import Flights from "../pages/Flights/Flights";
import Hotels from "../pages/Hotels/Hotels";
import RentACars from "../pages/RentACars/RentACars";
import Cruises from "../pages/Cruises/Cruises";
import Blogs from "../pages/Blogs/Blogs";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/rent-a-car" element={<RentACars />} />
      <Route path="/cruises" element={<Cruises />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
};

export default Routers;
