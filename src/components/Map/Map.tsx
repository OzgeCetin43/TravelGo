import React from "react";

import "./Map.css";

const Map: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19120105.7727045!2d-116.7468733803477!3d54.19783210562494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sKanada!5e0!3m2!1str!2str!4v1721305396051!5m2!1str!2str"
      width={"100%"}
      height="650"
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    />
  );
};

export default Map;
