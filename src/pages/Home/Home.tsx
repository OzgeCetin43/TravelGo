import React from "react";

import Hero from "../../components/Hero/Hero";
import Tab from "../../components/Tab/Tab";
import Map from "../../components/Map/Map";
import Sponsor from "../../components/Sponsor/Sponsor";
import Services from "../../components/Services/Services";
import WhyUs from "../../components/WhyUs/WhyUs";
import WhyUsDetail from "../../components/WhyUsDetail/WhyUsDetail";
import NextStation from "../../components/NextStation/NextStation";
import HolidayPackage from "../../components/HolidayPackage/HolidayPackage";

const Home: React.FC = () => (
  <>
    <Hero />
    <Tab />
    <Map />
    <Sponsor />
    <Services />
    <WhyUs />
    <WhyUsDetail />
    <NextStation />
    <HolidayPackage />
  </>
);

export default Home;
