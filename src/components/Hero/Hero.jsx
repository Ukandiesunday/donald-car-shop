import "./Hero.css";

const Hero = ({ handleScrollBottom }) => {
  return (
    <div className="hero">
      <div className="hero-container1">
        <div className="hero-wrapper1">
          <div className="hero-left">
            <h2 className="hero-header">
              Unleash durability and tech prowess in every drive with our cars.
            </h2>
            <p className="hero-desc">
              Get the best mobility experience with our cars and reserve 30% off
              trade offers. Don't take only our words for it, Make a step to
              confirm and see it works for you. We have remained a testament to
              many clients and igniting a deal with you is one of the best
              experiences.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-p2">Trade-In-offers 30%</div>
            <button className=" hero-btn" onClick={handleScrollBottom}>
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
