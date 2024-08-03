import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortrait, IoMail } from "react-icons/io5";

import image1 from "../../assets/images/footer-1.png";
import image2 from "../../assets/images/footer-2.png";
import image3 from "../../assets/images/footer-3.png";
import image4 from "../../assets/images/footer-4.png";
import image5 from "../../assets/images/footer-5.png";
import image6 from "../../assets/images/footer-6.png";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list-item">
          <h1>TravelGo</h1>
          <p>
            Embrace a worry-free travel experience with us as we strive to make
            your journey more enjoyable. From seamless itineraries to handpicked
            accommodations, we take care of every detail, leaving you free to
            savor every moment and create unforgettable memories.
          </p>
        </li>
        <li className="footer-list-item">
          <h1>Instagram</h1>
          <div className="instagram-image-container">
            <img src={image1} alt="instagram image" />
            <img src={image2} alt="instagram image" />
            <img src={image3} alt="instagram image" />
            <img src={image4} alt="instagram image" />
            <img src={image5} alt="instagram image" />
            <img src={image6} alt="instagram image" />
          </div>
        </li>
        <li className="footer-list-item">
          <h1>Contact</h1>
          <p>
            <FaLocationDot />
            <span>IZMIR / TURKEY</span>
          </p>
          <p>
            <IoPhonePortrait />
            <span>+90 0123 456 789</span>
          </p>
          <p>
            <IoMail />
            <span>support@travelgo.com</span>
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
