import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <div className="slider-wrapper">
      <Slider className="slider" {...settings}>
        <div className="hero-slide slider__item-01">
          <div></div>
          <div className="hero-content">
            Get the best of our BMW cars and reserve 30% off your trades.
          </div>
        </div>
        <div className="hero-slide slider__item-02">
          <div className="hero-content">
            Best mobility experience with our Nissan cars and reserve 30% off
            trade offers.
          </div>
        </div>
        <div className="hero-slide slider__item-03">
          <div className="hero-content">
            Our Toyota cars offer a seamless driving experience.
          </div>
        </div>
      </Slider>
      <p className="hero-p2">Trade In offers 30%</p>
      <p className="hero-p">
        unleash durability and tech prowess in every drive with our cars
      </p>
      <div className="hero-btn-container">
        <button className="hero-btn">Get Started</button>
        <span className="hero-span"></span>
      </div>
    </div>
  );
};

export default HeroSlider;
