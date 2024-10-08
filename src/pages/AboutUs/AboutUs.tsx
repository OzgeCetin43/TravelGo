import React from "react";

import AboutUsHero from "../../components/AboutUsHero/AboutUsHero";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FamousPlaces from "../../components/FamousPlaces/FamousPlaces";
import Experience from "../../components/Experience/Experience";
import Testimonials from "../../components/Testimonials/Testimonials";
import Sponsor from "../../components/Sponsor/Sponsor";
import Subscribe from "../../components/Subscribe/Subscribe";

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsHero />
      <AboutUsInfo />
      <WhyChooseUs />
      <FamousPlaces />
      <Experience />
      <Testimonials />
      <Sponsor />
      <Subscribe />
    </>
  );
};

export default AboutUs;
