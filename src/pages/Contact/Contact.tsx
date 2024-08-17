import React from "react";

import WhyUs from "../../components/WhyUs/WhyUs";
import WhyUsDetail from "../../components/WhyUsDetail/WhyUsDetail";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";
import Sponsor from "../../components/Sponsor/Sponsor";
import ContactUs from "../../components/ContactUs/ContactUs";
import Subscribe from "../../components/Subscribe/Subscribe";

const Contact: React.FC = () => {
  return (
    <>
      <WhyUs />
      <WhyUsDetail />
      <AboutUsInfo />
      <Sponsor />
      <ContactUs />
      <Subscribe />
    </>
  );
};

export default Contact;
