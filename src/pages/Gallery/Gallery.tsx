import React from "react";

import GalleryHero from "../../components/GalleryHero/GalleryHero";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import Banner from "../../components/Banner/Banner";
import Sponsor from "../../components/Sponsor/Sponsor";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Gallery: React.FC = () => {
  return (
    <>
      <GalleryHero />
      <ExoticPlaces />
      <PlanTrip />
      <Banner />
      <Sponsor />
      <Subscribe />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
};

export default Gallery;
