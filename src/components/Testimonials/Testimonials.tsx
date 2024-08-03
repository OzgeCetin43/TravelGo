import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { testimonials } from "../../assets/data/testimonials";

import "./Testimonials.css";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="testimonials-main-container">
      <small className="testimonials-subtitle">What Our Clients Say?</small>
      <h1 className="testimonials-title">Client Testimonial</h1>
      <div className="testimonials-container">
        <div className="testimonials-container-left">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonials-container-right">
          <div className="testimaonial-actions-container">
            <FaArrowLeft onClick={handlePrev} />
            <FaArrowRight onClick={handleNext} />
          </div>
          <div className="testimonial-detail-container">
            <h1>{testimonial.name}</h1>
            <small>{testimonial.company}</small>
            <p>{testimonial.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
