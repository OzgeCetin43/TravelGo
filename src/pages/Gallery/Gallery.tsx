import React from "react";

import GalleryHero from "../../components/GalleryHero/GalleryHero";
import ExoticPlaces from "../../components/ExoticPlaces/ExoticPlaces";
import PlanTrip from "../../components/PlanTrip/PlanTrip";

const Gallery: React.FC = () => {
  return (
    <>
      <GalleryHero />
      <ExoticPlaces />
      <PlanTrip />
    </>
  );
};

export default Gallery;
