import React from "react";

import GalleryHero from "../../components/GalleryHero/GalleryHero";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import Banner from "../../components/Banner/Banner";

const Gallery: React.FC = () => {
  return (
    <>
      <GalleryHero />
      <ExoticPlaces />
      <PlanTrip />
      <Banner />
    </>
  );
};

export default Gallery;
