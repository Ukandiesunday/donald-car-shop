import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";

const HeroSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
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
          <div>{/* <img src="public/slider/bmw.png" alt="" /> */}</div>
          <div className="hero-content">
            Get the best of our BMW cars and reserve 50% off your trades.
          </div>
        </div>
        <div className="hero-slide slider__item-02">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="hero-slide slider__item-04">
          {/* <img src="" alt="" /> */}
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
