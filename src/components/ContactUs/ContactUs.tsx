import React from "react";

import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-container-left">
        <h1>TravelGo</h1>
        <p>
          At our travel website, our speciality lies in curating unforgettable
          experiences that cater to the unique preferences of each traveler.
        </p>
        <small>Location: IZMIR / TURKEY</small>
        <small>Phone: +90 0123 456 789</small>
        <small>Email: support@travelgo.com</small>
      </div>
      <div className="contact-us-container-right">
        <h2>Send Us A Message</h2>
        <form className="contact-us-form">
          <div className="contact-us-form-item">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>
          <div className="contact-us-form-item">
            <input type="text" placeholder="Your phone" />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="contact-us-form-item">
            <textarea rows={15} placeholder="Start writing your message here" />
          </div>
          <button className="contact-us-button">Send a Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
