import React from "react";

import AboutUsHero from "../../components/AboutUsHero/AboutUsHero";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsHero />
      <AboutUsInfo />
      <WhyChooseUs />
    </>
  );
};

export default AboutUs;
