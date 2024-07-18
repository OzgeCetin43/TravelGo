import React from "react";

import Hero from "../../components/Hero/Hero";
import Tab from "../../components/Tab/Tab";
import Map from "../../components/Map/Map";
import Sponsor from "../../components/Sponsor/Sponsor";

const Home: React.FC = () => (
  <>
    <Hero />
    <Tab />
    <Map />
    <Sponsor />
  </>
);

export default Home;
