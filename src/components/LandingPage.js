import React from "react";
import img1 from "../img/Testimonial image 1.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="left">
        <h1 className="amazing">
          <span style={{ display: "block" }}>Amazing</span> Experiences from Our
          Wonderful Customers
        </h1>
        <p className="here">
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="elipse">
        <img className="testimonial-img-1" src={img1} alt="testimonial" />
      </div>
    </div>
  );
};

export default LandingPage;
