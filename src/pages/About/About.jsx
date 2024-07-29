import prince from "../../assets/images/prince.jpg";
import team2 from "../../assets/images/user-01.png";
import team3 from "../../assets/images/user-02.png";
import aboutImg from "../../assets/images/aboutImg.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="abt">
        <div className="abt-img">
          <h4>about us</h4>
          <img className="abt-img" src={aboutImg} alt="" />
        </div>
      </div>
      <div className="about-desc">
        <div className="div1">
          <p>
            <b>DonCars</b> is known for excellent car sales and services. We've
            recorded great success adventures in our business for more than
            decades, our clients/customers are placed at high esteem as we meet
            their desires accordingly. Moreover our cars are best described with
            seamless and fantastic drive experience, durability and
            affordability. We are internationally recognized and licensed for
            any sort of car deals. Reliability is one of our watch-words that
            fetched us great firmness in the competitive global and local
            markets.
          </p>
          <p className="p">
            <a href="tel:+2349153678691" style={{ color: "gold " }}>
              <i className="ri-cellphone-fill"></i> HAS A QUESTION?
              :+2348156678435
            </a>
          </p>
        </div>
        <div className="div">
          <img src="slider/bmw.png" alt="" />
        </div>
      </div>
      <div id="about-bottom-wrapper1">
        <div className="about-desc2">
          <h3>Meet Our Team</h3>
          <p>Our team members are always committed to your services </p>
          <div className="abt-imgs">
            <div className="abt-items">
              <img className="review-img" src={prince} alt="" />
              <h4>Mr. prince</h4>
              <p>Chief Engineer</p>
              <p>Cars Inspection</p>
            </div>
            <div className="abt-items">
              <img className="review-img" src={team3} alt="" />
              <i className="ri-customer-service-2-line"></i>
              <h4>Miss. Aliya</h4>
              <p>Customer Care officer</p>
            </div>
            <div className="abt-items">
              <img className="review-img" src={team2} alt="" />
              <h4>Mr. Smith</h4>
              <p>Sales and delivery manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
