// import React, { useState } from "react";
import "./Reviews.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import emediong from "../../assets/images/emediong.jpg";
import lola from "../../assets/images/lola.jpg";
import akpo from "../../assets/images/akpo.jpg";
const Reviews = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    disableOnInteraction: true,
    pauseOnMouseHover: false,
    autoplaySpeed: 4000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="rev-wrapper">
      <div className="review">
        <h1>what our customers say!</h1>
        <div className="banner-wrapper">
          <div className="slider-container">
            <Slider {...settings} className="slider slide">
              <div className="slider-img-container slide-item">
                <img src={emediong} alt="emediong" />
                <p className="name">Mr. Godwin</p>
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
              <div className="slider-img-container slide-item">
                <img src={lola} alt="" />
                <p className="name">Mrs. Lola</p>
                <p>Lagos</p>
                <div className="rev-icons">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  All processes were seamless and the experience was fantastic.
                  I did not use any agent but your staff at office were very
                  helpful.
                </p>
              </div>

              <div className="slider-img-container slide-item">
                <img src={akpo} alt="" />
                <p className="name">Mr. Isaac</p>
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
            </Slider>
          </div>
        </div>
      </div>

      {/* <div className="review">
        <h1>what our customers say!</h1>
        <div className="slide slide2">
          <div className="rev-item">
            <div>
              <img className="review-img" src={emediong} alt="emediong" />
            </div>
            <p className="name">Mr. Godwin</p>
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
              <img className="review-img" src={lola} alt="lola" />
            </div>
            <p className="name">Mrs. Lola</p>
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
              <img className="review-img" src={akpo} alt="akpo" />
            </div>
            <p className="name">Mr. Isaac</p>
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
      </div> */}
    </div>
  );
};

export default Reviews;
