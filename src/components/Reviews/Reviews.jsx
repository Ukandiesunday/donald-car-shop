// import React, { useState } from "react";
import "./Reviews.css";
import emediong from "../../assets/images/emediong.jpg";
import lola from "../../assets/images/lola.jpg";
import akpo from "../../assets/images/akpo.jpg";
const Reviews = () => {
  return (
    <div className="rev-wrapper">
      <div className="review">
        <h1>what our customers say!</h1>
        <div className="slide slide2">
          <div className="rev-item">
            <div>
              <img className="review-img" src={emediong} alt="emediong image" />
            </div>
            <p>Mr. Godwin</p>
            <p>PortHartcourt</p>
            <div className="rev-icons">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p>
              Your team of clientele relationship from client, agent/service
              through accounting to shipment and the entire chain were
              wonderfully good.
            </p>
          </div>

          <div className="rev-item">
            <div>
              <img className="review-img" src={lola} alt="lola image" />
            </div>
            <p>Mrs. Lola</p>
            <p>Lagos</p>
            <div className="rev-icons">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p>
              All processes were seamless and the experience was fantastic. I
              did not use any agent but your staff at office were very helpful.
            </p>
          </div>
          <div className="rev-item">
            <div>
              <img className="review-img" src={akpo} alt="akpo image" />
            </div>
            <p>Mr. Isaac</p>
            <p>Abuja</p>
            <div className="rev-icons">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <p>
              The service was good and the agent I dealt with was extremely
              helpful and worked very well.
            </p>
          </div>
          <div className="slide-icons"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
