import React from "react";

import OurBlog from "../../components/OurBlog/OurBlog";
import Map from "../../components/Map/Map";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import Subscribe from "../../components/Subscribe/Subscribe";
import Banner from "../../components/Banner/Banner";

const Blogs: React.FC = () => {
  return (
    <>
      <OurBlog />
      <Map />
      <Services />
      <Testimonials />
      <Subscribe />
      <Banner />
    </>
  );
};

export default Blogs;
