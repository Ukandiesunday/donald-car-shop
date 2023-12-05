import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";
// import img1 from "../../assets/images/hero-cars/bmw.png";
// import img2 from "../../assets/images/hero-cars/mercedes.jpg";
// import img3 from "../../assets/images/hero-cars/nissan.jpg";
// import img4 from "../../assets/images/hero-cars/toyota.png";
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
    <Slider {...settings}>
      <div className="hero-slide slider__item-01">
        <img src="" alt="" />
      </div>
      <div className="hero-slide slider__item-02">
        <img src="" alt="" />
      </div>
      <div className="hero-slide slider__item-03">
        <img src="" alt="" />
      </div>
      <div className="hero-slide slider__item-04">
        <img src="" alt="" />
      </div>
    </Slider>
  );
};

export default HeroSlider;
