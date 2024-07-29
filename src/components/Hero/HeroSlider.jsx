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
          <div className="hero-p">
            unleash durability and tech prowess in every drive with our cars
          </div>
          <div className="hero-p2">Trade-In-offers 30%</div>
          <div className="hero-content">
            Get the best of our BMW cars and reserve 30% off your trades.
          </div>
        </div>
        <div className="hero-slide slider__item-02">
          <div className="hero-p">
            unleash durability and tech prowess in every drive with our cars
          </div>
          <div className="hero-p2">Trade-In-offers 30%</div>
          <div className="hero-content">
            Best mobility experience with our Nissan cars and reserve 30% off
            trade offers.
          </div>
        </div>
        <div className="hero-slide slider__item-03">
          <div className="hero-p">
            unleash durability and tech prowess in every drive with our cars
          </div>
          <div className="hero-p2">Trade-In-offers 30%</div>
          <div className="hero-content">
            Our Toyota cars offer a seamless driving experience.
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
