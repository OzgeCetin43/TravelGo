import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Gallery from "../pages/Gallery/Gallery";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default Routers;
